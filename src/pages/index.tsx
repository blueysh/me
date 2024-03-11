import Button from "@/components/button";
import WorkCard from "@/components/work-card";

export default function Index() {
  return (
    <>
      <main>
        <section className="p-5">
          <h1 className="mx-auto max-w-[1000px] text-[72px] font-extrabold leading-[100.8px] tracking-tighter max-sm:max-w-full max-sm:text-4xl max-sm:font-bold max-sm:tracking-tight">
            Designing to inspire. 💡
          </h1>
          <h1 className="mx-auto max-w-[1000px] text-[72px] font-extrabold leading-[100.8px] tracking-tighter max-sm:max-w-full max-sm:text-4xl max-sm:font-bold max-sm:tracking-tight">
            Building from desire. 🔥
          </h1>
          <p className="mb-[32px] mt-[16px]">
            I&apos;m Jan, a junior at Newton College & Career Academy, studying
            CS for a better future.
          </p>

          <div className="space-y-1">
            <Button type="secondary">See my Work</Button>
            <Button type="secondary">View Resume</Button>
          </div>
        </section>

        <section className="p-5">
          <div className="flew-row mb-[32px] flex">
            <h2>Showcased Work</h2>
            <span className="ml-auto" />
            <span className="max-sm:hidden">
              <Button
                type="secondary"
                onClick={() => (location.href = "/work")}
              >
                See All
              </Button>
            </span>
          </div>
          <hr className="mb-[16px] opacity-25" />
          <div className="grid grid-flow-row grid-cols-2 grid-rows-2 max-sm:grid-cols-none">
            <WorkCard>
              <h2>discord.jar</h2>
              <p>A WIP Discord API wrapper for Java.</p>
              <span className="flex flex-row space-x-2">
                <span className="mb-5 rounded-full bg-blue-400 px-2 text-sm font-light">
                  Contributor
                </span>
                <span className="mb-5 rounded-full bg-indigo-400 px-2 text-sm font-light">
                  Java
                </span>
              </span>
              <div className="bottom-0 flex flex-row justify-center">
                <Button
                  type="secondary"
                  onClick={() =>
                    (location.href =
                      "https://github.com/discord-jar/discord.jar")
                  }
                >
                  View on GitHub
                </Button>
              </div>
            </WorkCard>
            <WorkCard>
              <h2>appman</h2>
              <p>CLI-based app manager for macOS.</p>
              <span className="flex flex-row space-x-2">
                <span className="mb-5 rounded-full bg-blue-400 px-2 text-sm font-light">
                  Owner
                </span>
                <span className="mb-5 rounded-full bg-indigo-400 px-2 text-sm font-light">
                  Java
                </span>
              </span>
              <div className="bottom-0 flex flex-row justify-center">
                <Button
                  type="secondary"
                  onClick={() =>
                    (location.href = "https://github.com/blueysh/appman")
                  }
                >
                  View on GitHub
                </Button>
              </div>
            </WorkCard>
            <WorkCard>
              <h2>lineman</h2>
              <p>Java framework for building CLI tools.</p>
              <span className="flex flex-row space-x-2">
                <span className="mb-5 rounded-full bg-blue-400 px-2 text-sm font-light">
                  Owner
                </span>
                <span className="mb-5 rounded-full bg-indigo-400 px-2 text-sm font-light">
                  Java
                </span>
              </span>
              <div className="bottom-0 flex flex-row justify-center">
                <Button
                  type="secondary"
                  onClick={() =>
                    (location.href = "https://github.com/blueysh/lineman")
                  }
                >
                  View on GitHub
                </Button>
              </div>
            </WorkCard>
            <WorkCard>
              <h2>sap4j</h2>
              <p>Simple Java library for parsing args.</p>
              <span className="flex flex-row space-x-2">
                <span className="mb-5 rounded-full bg-blue-400 px-2 text-sm font-light">
                  Owner
                </span>
                <span className="mb-5 rounded-full bg-indigo-400 px-2 text-sm font-light">
                  Java
                </span>
              </span>
              <div className="bottom-0 flex flex-row justify-center">
                <Button
                  type="secondary"
                  onClick={() =>
                    (location.href = "https://github.com/blueysh/sap4j")
                  }
                >
                  View on GitHub
                </Button>
              </div>
            </WorkCard>
          </div>
        </section>
      </main>
    </>
  );
}
