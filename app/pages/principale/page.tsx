import Header from "../../components/page-acceuil/header";
import Footer from "../../components/page-acceuil/footer";
import AcceuilMain from "../../components/page-acceuil/acceuil_module";

export default function principale() {
  return (
    <>
      <Header />
      <main>
       <AcceuilMain />
      </main>
      <Footer />
    </>
  );
};

