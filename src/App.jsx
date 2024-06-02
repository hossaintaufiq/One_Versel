import StorySection from "./components/StorySection";
import TeamSection from "./components/TeamSection";
import ArticlesSection from "./components/ArticlesSection";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" w-3/4 max-auto">{/*max-w-[1512px] w-full */}
        <StorySection />
        <ArticlesSection />
        <TeamSection />
      </div>
    </div>
  );
}

export default App;
