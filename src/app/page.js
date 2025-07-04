export default function Home() {
  return (
    <>
      <video
        src="/Home.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      <div className="container mt-5">
        {/* what to screen here */}
      </div>
    </>
  );
}