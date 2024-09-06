// app/page.tsx
import LogCache from './components/LogCache';
import YourComponent from './components/YourComponent';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the Apollo Client Integration</h1>
      <YourComponent />
      {/* <LogCache /> */}
    </main>
  );
}
