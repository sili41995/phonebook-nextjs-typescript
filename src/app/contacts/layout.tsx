import SideBar from '@/components/SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container contacts-page'>
      <SideBar />
      <section className='section'>{children}</section>
    </div>
  );
}
