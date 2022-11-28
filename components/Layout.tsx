import Footer from './Footer';
import Header from './Header';

export default function Layout(props: any) {
  return (
    <div className="bg-[#95b0b6] flex flex-col justify-between min-h-[100vh]">
      <Header user={props.user} />

      <main className="flex flex-col font-amiko px-4 lg:px-5 z-1">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
