import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1 className="text-center font-bold text-3xl text-purple-500">Rajan</h1>
      <button
        className={buttonVariants({
          className: "bg-purple-500 text-white",
        })}
      >
        Click me!
      </button>
    </main>
  );
}
