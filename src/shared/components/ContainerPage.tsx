export const ContainerPage = ({ children, title = "Dashboard" }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-normal text-primary text-2xl mb-6">{title}</h1>
      {children}
    </div>
  );
};