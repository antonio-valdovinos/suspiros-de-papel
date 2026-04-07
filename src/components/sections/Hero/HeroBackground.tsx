export default function HeroBackground() {
  return (
    <>
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none blur-3xl opacity-10"
        style={{
          backgroundColor: "#ffdbd0",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      <div
        className="absolute top-1/2 -left-20 w-[400px] h-[400px] pointer-events-none blur-3xl opacity-15"
        style={{
          backgroundColor: "#e3e5c0",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />
    </>
  )
}