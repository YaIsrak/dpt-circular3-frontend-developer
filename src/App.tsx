import MasterPrice from "./components/MasterPrice/MasterPrice"
import NavigationBar from "./components/layout/NavigationBar"

function App() {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen w-full">
        <div className="max-w-7xl px-4 mx-auto">
          <MasterPrice />
        </div>
      </main>
    </>
  )
}

export default App
