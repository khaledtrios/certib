"use client";

import { OrganogramNode } from "./OrganogramNode";
import type { OrganogramEmployee } from "./types";

const CONNECTOR_HEIGHT = 28;
const LINE_COLOR = "#37C2A2"; // crtib-green-blue
const LINE_WIDTH =    1;

type OrganogramChartProps = {
  /**
   * Nó raiz do organograma (formato hierárquico).
   * O nó aparece no topo; os níveis seguintes são os filhos, recursivamente.
   */
  root: OrganogramEmployee;
  className?: string;
};

export function OrganogramChart({ root, className = "" }: OrganogramChartProps) {
  if (!root) return null;

  return (
    <div
      className={`flex flex-col items-center gap-0 font-sans ${className}`}
      role="img"
      aria-label="Organograma de funcionários"
    >
      <HierarchyLevel node={root} />
    </div>
  );
}

function HierarchyLevel({ node }: { node: OrganogramEmployee }) {
  const hasChildren = node.children && node.children.length > 0;
  const children = node.children ?? [];

  return (
    <div className="flex flex-col items-center">
      <OrganogramNode
        name={node.name}
        photoUrl={node.photoUrl}
        role={node.role}
      />

      {hasChildren && (
        <div className="flex flex-col items-center">
          {/* Wrapper inline-flex: largura = largura da linha de filhos, para o SVG e os blocos ficarem alinhados */}
          <div className="inline-flex flex-col items-stretch">
            <ConnectorLines childCount={children.length} />
            <div className="flex gap-4">
              {children.map((child) => (
                <div
                  key={child.id}
                  className="flex min-w-0 flex-1 flex-col items-center"
                >
                  <HierarchyLevel node={child} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** Desenha o braço em SVG (vertical do pai + horizontal + verticais até cada filho) para garantir junção perfeita. */
function ConnectorLines({ childCount }: { childCount: number }) {
  const w = 100;
  const hUp = 28;
  const hDown = 28;
  const totalH = hUp + hDown;
  const half = LINE_WIDTH / 2;

  // Centros dos filhos em unidades (0–100): 1 filho = 50; 2 = 25,75; 3 = 16.67, 50, 83.33
  const centers =
    childCount === 1
      ? [50]
      : Array.from({ length: childCount }, (_, i) => (50 / childCount) * (2 * i + 1));

  // Um único percurso contínuo para evitar sobreposição de traços (linha grossa nos braços)
  let pathD: string;
  if (childCount === 1) {
    pathD = `M ${50} ${half} V ${totalH}`;
  } else {
    // Vertical do pai; depois da junção, ramos: centro→esquerda→baixo, centro→direita→baixo (sem redesenhar a horizontal inteira)
    const [first, ...rest] = centers;
    pathD = `M ${50} ${half} V ${hUp} L ${first} ${hUp} V ${totalH}`;
    rest.forEach((cx) => {
      pathD += ` M ${50} ${hUp} L ${cx} ${hUp} V ${totalH}`;
    });
  }

  return (
    <svg
      width="100%"
      height={totalH}
      viewBox={`0 0 ${w} ${totalH}`}
      preserveAspectRatio="none"
      className="overflow-visible"
      aria-hidden
    >
      <path
        d={pathD}
        fill="none"
        stroke={LINE_COLOR}
        strokeWidth={LINE_WIDTH}
        strokeLinecap="butt"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
