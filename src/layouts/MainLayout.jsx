import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <SearchBar />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
}
