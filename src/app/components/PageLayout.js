export default function PageLayout({ children }) {
  return (
    <div className="px-3 px-md-5 d-flex flex-column gap-md-5 gap-4 mx-auto my-md-5 my-2">
      {children}
    </div>
  );
}
