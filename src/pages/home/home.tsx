import Recommendation from "@/components/recommendation/recommendation";
import { useAuthStore } from "@/store/authStore";
import PageAcceuil from "./page_acceuil";

function Home() {
  const { auth_token } = useAuthStore();

  if (auth_token == null) {
    return <PageAcceuil />;
  }

  return <Recommendation />;
}

export default Home;
