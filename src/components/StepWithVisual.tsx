export default function StepWithVisual({ stepText, imageUrl, gifUrl }) {
  return (
    <div>
      <div className="mb-2">{stepText}</div>
      {imageUrl && <img src={imageUrl} alt="Step visual" className="rounded shadow mb-2" />}
      {gifUrl && (
        <img src={gifUrl} alt="Step animation" className="rounded shadow mb-2" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
}