import { ProfileForm } from '@/components/Forms/ProfileForm';
import { NavBar } from '@/components/NavBar/NavBar';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ProfileForm />
    </>
  );
}
