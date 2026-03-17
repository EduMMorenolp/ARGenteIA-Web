import { useState, useEffect } from 'react';

const DOCS_BASE = '/docs';

/* ═══════════════════════════════════════════════════════════════════════════
   CHANGELOG HOOK
   ═══════════════════════════════════════════════════════════════════════════ */

export interface ChangelogEntry {
  version: string;
  date: string;
  added: string[];
  improved: string[];
  fixed: string[];
}

function parseChangelog(md: string): ChangelogEntry[] {
  const entries: ChangelogEntry[] = [];
  const versionBlocks = md.split(/^## /gm).slice(1);

  for (const block of versionBlocks) {
    const lines = block.split('\n');
    const header = lines[0]?.trim() || '';
    const match = header.match(/\[(.+?)\]\s*-\s*(\d{4}-\d{2}-\d{2})/);
    if (!match) continue;

    const entry: ChangelogEntry = {
      version: match[1],
      date: match[2],
      added: [],
      improved: [],
      fixed: [],
    };

    let currentGroup: 'added' | 'improved' | 'fixed' | null = null;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (/^###\s*Añadido/i.test(line)) { currentGroup = 'added'; continue; }
      if (/^###\s*(Mejorado|Cambiado)/i.test(line)) { currentGroup = 'improved'; continue; }
      if (/^###\s*(Corregido|Arreglado)/i.test(line)) { currentGroup = 'fixed'; continue; }

      if (line.startsWith('- ') && currentGroup) {
        const clean = cleanMarkdown(line.slice(2));
        if (clean) entry[currentGroup].push(clean);
      }
    }

    entries.push(entry);
  }

  return entries;
}

export function useChangelog() {
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${DOCS_BASE}/CHANGELOG.md`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((md) => {
        setEntries(parseChangelog(md));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { entries, loading, error };
}

/* ═══════════════════════════════════════════════════════════════════════════
   DOCS HOOK
   ═══════════════════════════════════════════════════════════════════════════ */

export interface DocItem {
  label: string;
  text: string;
}

export interface DocSection {
  title: string;
  description: string;
  items: DocItem[];
}

function cleanMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .trim();
}

function parseDocs(md: string): DocSection[] {
  const sections: DocSection[] = [];

  // Remove code blocks entirely (```...```)
  const cleaned = md.replace(/```[\s\S]*?```/g, '');

  const blocks = cleaned.split(/^## /gm).slice(1);

  for (const block of blocks) {
    const lines = block.split('\n');
    const rawTitle = (lines[0] || '').trim();

    // Clean emoji prefixes from titles
    const title = rawTitle.replace(/^[^\w\s]*\s*/u, '').replace(/^#+\s*/, '').trim();
    if (!title) continue;

    const section: DocSection = { title, description: '', items: [] };
    const descLines: string[] = [];
    let inSubsection = false;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Skip empty lines
      if (!trimmed) continue;

      // Sub-headers (### ) — treat as a label for following items
      if (trimmed.startsWith('### ')) {
        inSubsection = true;
        const subTitle = cleanMarkdown(trimmed.slice(4));
        section.items.push({ label: subTitle, text: '' });
        continue;
      }

      // List items with bold label: "- **Label**: Description"
      if (trimmed.startsWith('- **')) {
        const clean = cleanMarkdown(trimmed.slice(2));
        const colonIdx = clean.indexOf(':');
        if (colonIdx > 0) {
          section.items.push({
            label: clean.slice(0, colonIdx).trim(),
            text: clean.slice(colonIdx + 1).trim(),
          });
        } else {
          section.items.push({ label: '', text: clean });
        }
        continue;
      }

      // Simple list items: "- text"
      if (trimmed.startsWith('- ')) {
        const clean = cleanMarkdown(trimmed.slice(2));
        section.items.push({ label: '', text: clean });
        continue;
      }

      // Regular paragraph text (before any items)
      if (!inSubsection && section.items.length === 0) {
        descLines.push(cleanMarkdown(trimmed));
      }
    }

    section.description = descLines.join(' ');
    if (section.items.length > 0 || section.description) {
      sections.push(section);
    }
  }

  return sections;
}

export function useDocs(filenames: string[]) {
  const [sections, setSections] = useState<DocSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all(
      filenames.map((f) =>
        fetch(`${DOCS_BASE}/${f}`)
          .then((res) => {
            if (!res.ok) throw new Error(`HTTP ${res.status}: ${f}`);
            return res.text();
          })
      )
    )
      .then((texts) => {
        const all = texts.flatMap((md) => parseDocs(md));
        setSections(all);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { sections, loading, error };
}
