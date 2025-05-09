import LightDarkToggle from "@/components/ui/light-dark-toggle";

type Props = {
  children: React.ReactNode;
};

const LoggedOutLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed right-0 top-1/2" />
    </>
  );
};
export default LoggedOutLayout;
