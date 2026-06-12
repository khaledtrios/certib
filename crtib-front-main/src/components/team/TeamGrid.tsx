import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { getMediaUrl } from "@/lib/payload";

interface TeamMember {
  id?: string;
  name: string;
  role?: string | null;
  department?: string | null;
  phone?: string | null;
  email?: string | null;
  photo?: any;
  children?: TeamMember[];
}

function MemberCard({ member }: { member: TeamMember }) {
  const photoUrl = member.photo ? getMediaUrl(member.photo) : null;

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Photo */}
      <div className="relative w-full aspect-[4/3] bg-gray-100">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Infos */}
      <div className="flex flex-col flex-1 p-4 gap-1">
        <h3 className="text-[14px] font-bold text-[#2F2F2F] leading-tight">
          {member.name}
        </h3>

        {member.role && (
          <p className="text-[12px] text-[#08AA86] font-semibold uppercase tracking-wide leading-snug">
            {member.role}
          </p>
        )}

        {member.department && (
          <p className="text-[12px] text-gray-500 leading-snug">
            {member.department}
          </p>
        )}

        {(member.phone || member.email) && (
          <div className="mt-2 flex flex-col gap-1.5 pt-2 border-t border-gray-100">
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="flex items-center gap-2 text-[12px] text-gray-600 hover:text-[#08AA86] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[#08AA86]" />
                {member.phone}
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 text-[12px] text-gray-600 hover:text-[#08AA86] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0 text-[#08AA86]" />
                {member.email}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface TeamGridProps {
  root: {
    name?: string;
    role?: string;
    photo?: any;
    children?: TeamMember[];
  };
}

export function TeamGrid({ root }: TeamGridProps) {
  const members: TeamMember[] = [];

  if (root.children?.length) {
    members.push(...root.children);
    root.children.forEach((child) => {
      if (child.children?.length) members.push(...child.children);
    });
  }

  if (!members.length) return null;

  return (
    <section className="w-full bg-[#F5F5F5] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {members.map((member, i) => (
            <MemberCard key={member.id ?? i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
