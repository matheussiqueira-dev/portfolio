import EncomPanel from "@/components/ui/EncomPanel";

type TechStackListProps = {
  groups: Array<{
    label: string;
    items: string[];
  }>;
};

export default function TechStackList({ groups }: TechStackListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group) => (
        <EncomPanel key={group.label} className="p-5">
          <p className="ui-label text-xs text-[color:var(--muted)]">{group.label}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="tron-badge">
                {item}
              </span>
            ))}
          </div>
        </EncomPanel>
      ))}
    </div>
  );
}
