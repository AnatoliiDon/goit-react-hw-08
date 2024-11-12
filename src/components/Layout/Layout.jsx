import { AppBar } from '../AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};
