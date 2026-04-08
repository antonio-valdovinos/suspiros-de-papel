export default function HeroBackground() {
  return (
    <>
      {/* Blob superior derecho — primary-fixed */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none blur-3xl opacity-10"
        style={{
          backgroundColor: "var(--color-primary-fixed)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      {/* Blob izquierdo — tertiary-fixed */}
      <div
        className="absolute top-1/2 -left-20 w-[400px] h-[400px] pointer-events-none blur-3xl opacity-15"
        style={{
          backgroundColor: "var(--color-tertiary-fixed)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />
    </>
  )
}