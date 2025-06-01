import { SkillType, skillsData } from "~/data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative pt-24 pb-24 md:pt-28 bg-cover bg-center"
    >
      <div className="container mx-auto px-6 animate-fadeIn animation-delay-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative">
          Skills
          <hr className="w-12 border-t-4 border-teal-600 rounded mt-2 mx-auto" />
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skillsData.map((item: SkillType, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 w-full max-w-xs flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  {item.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {item.skills.length > 0 ? (
                  item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full hover:bg-teal-600 hover:text-white transition cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400 italic">No skills</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
