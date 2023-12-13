import withAppProviders from './withAppProviders';
import BrowserRouter from './setup/core/browserRouter';
import Layout from './config';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default withAppProviders(App)();
