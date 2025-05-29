import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskMasterNavbar() {
  const [solid, setSolid] = useState(false);
  const navigate = useNavigate();

  //Button Handlers
  const loginHandler = () => {
    navigate("/login");
  };
  const signupHandler = () => {
    navigate("/login"); // Change when signup page is made
  };

  return (
    <div className="relative h-screen flex flex-col">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-orange-400 rotate-45"></div>
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-green-400 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-500 rotate-45 opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-yellow-400 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-400 rotate-45"></div>
      </div>
      <div
        className="relative z-10 flex-1 flex flex-col overflow-auto scrollbar-cool"
        onScroll={(e) => setSolid(e.currentTarget.scrollTop > 90)}
      >
        {/* Navbar */}
        <nav
          className={`sticky top-0 w-full px-6 py-4`}>
          {" "}
          <div className="max-w-7xl mx-auto">
            <div
              className={`
              flex items-center justify-between
              rounded-2xl px-6 py-3 border border-white/10
              transition-colors duration-300 ease-in-out
              ${
                solid
                  ? "bg-purple-900 backdrop-blur-md shadow-md"
                  : "bg-white/5 backdrop-blur-md"
              }
            `}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img
                    src="/LogoMaster.png"
                    alt="TaskMasterAI Logo"
                    className="h-8 w-auto flex-shrink-0"
                  />
                </div>
                <span className="text-white font-bold text-xl">
                  TaskMasterAI
                </span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Contact us
                </a>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={loginHandler}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Log in
                </button>
                <button
                  onClick={signupHandler}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex-1 px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-white/50 text-6xl font-bold mb-4">
              Your Content Goes Here
            </div>
            <p className="text-white/40 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              temporibus voluptatem magnam, voluptas molestiae ut fuga, id quod
              ipsum rerum impedit libero maxime doloremque. Similique dicta quam
              eaque odio dolorem optio praesentium aliquid aperiam voluptates
              corrupti quod corporis numquam, repellendus suscipit nemo
              excepturi laudantium amet illo iste. Nam, totam nobis! Deleniti
              quod ullam exercitationem quibusdam sapiente mollitia ut porro
              reprehenderit dolore, provident optio odio, rerum dignissimos!
              Nisi quos iusto labore voluptas tenetur adipisci mollitia omnis
              corrupti, vitae et magnam quas hic inventore! At quia vitae
              commodi, iste ipsum necessitatibus rem! Adipisci ex soluta, eos
              voluptas quo quos laborum et, ipsum voluptates consequatur ipsa
              quasi distinctio consectetur aliquid quaerat totam alias pariatur,
              quae eius provident accusamus. Laborum aliquid quaerat illum, a
              incidunt nihil sequi saepe optio ratione ipsum molestiae provident
              dolorem, excepturi, laudantium similique quisquam corporis
              sapiente omnis rerum non minus natus delectus repudiandae! Ducimus
              id eos accusamus qui alias officia magni, ab, porro, odio eaque
              molestias cupiditate illo quas atque obcaecati voluptates
              exercitationem. Ipsum iusto cupiditate consequuntur exercitationem
              ratione at itaque quisquam sequi illum nemo, fuga alias cum odio
              sint eaque, quo debitis voluptate placeat eius, possimus facere
              vero dolore tempore? Porro mollitia omnis repellendus, pariatur
              placeat blanditiis non asperiores, iure autem, fugit amet quasi
              itaque? Repellendus sit optio sed doloribus totam cum, reiciendis
              dolorem, iste alias nulla quis fuga nesciunt ab dolores maxime
              voluptatum assumenda modi laudantium? Eveniet, debitis
              necessitatibus laudantium ea vero dolor possimus architecto,
              inventore corrupti eos consectetur iste ab commodi suscipit quas
              voluptatibus culpa a at voluptatem repudiandae esse, earum alias.
              Sunt alias numquam earum commodi! Accusamus quia dolorum
              consequuntur sapiente. Deserunt eum ipsum at vel est iusto cumque
              perferendis voluptatum eaque praesentium. In unde facilis quis
              architecto soluta totam similique dicta ducimus omnis repellendus
              perferendis quo quia quam necessitatibus tempore, ut recusandae
              molestiae voluptatum magni exercitationem eos autem laudantium?
              Recusandae dicta provident consectetur cupiditate excepturi
              officia. Illum odit nesciunt enim mollitia odio atque dicta
              dignissimos, ipsa aperiam eos laudantium quia ex quam ab deserunt
              numquam necessitatibus doloremque id neque minus tenetur ipsum.
              Inventore officiis atque officia veritatis suscipit, pariatur,
              commodi cumque libero fuga magnam laudantium provident quas
              praesentium id, qui modi! Ipsam delectus qui quos. Deleniti
              architecto eaque ipsa repudiandae officiis sit magnam beatae
              incidunt sint autem similique labore reiciendis harum illo
              dolores, alias nemo dicta iure laborum dolore, debitis voluptates
              aliquid fuga ex. Quaerat, molestiae cum laboriosam, blanditiis
              illo nostrum rerum ratione delectus inventore praesentium, esse
              natus aliquid voluptatibus fuga? Consectetur blanditiis saepe nisi
              laudantium consequatur? Beatae enim sequi quibusdam? Fugiat neque
              veniam accusamus in corrupti nisi repudiandae repellat? Eveniet,
              incidunt tempora. Unde, temporibus! Excepturi accusantium quidem
              veritatis quibusdam eaque culpa, debitis consectetur impedit,
              illum magni cupiditate veniam suscipit minus, possimus sunt beatae
              earum. Voluptas excepturi cum architecto harum ipsam dignissimos
              ab vitae debitis qui ullam ipsa, doloribus autem fugiat magni
              atque eaque! Sed labore dolore sint earum, blanditiis at quis non
              quo tempora culpa eius obcaecati magnam rerum mollitia. Iste esse
              mollitia neque laudantium eveniet dolor quaerat a magnam.
              Recusandae delectus, optio, praesentium quasi natus non est ad
              iure accusamus error, vel doloremque corporis fugiat eum fugit
              voluptate? Laborum dolor culpa minima mollitia, necessitatibus non
              cupiditate, provident, voluptatibus tempore quidem porro corrupti
              reprehenderit laboriosam delectus soluta. Facere perferendis
              dolorem fugiat ad distinctio eaque repellendus, minima molestias
              id eligendi? Quos nesciunt inventore impedit dolor. Temporibus
              neque accusantium, doloremque eveniet molestias culpa, rem amet
              dolores odit ullam ex doloribus. Voluptas neque tempore ullam ad
              dignissimos praesentium architecto totam expedita laborum numquam,
              maiores quis et? Eius molestias itaque atque dolor, voluptatibus
              minima aliquam eos animi delectus pariatur culpa sint libero
              consequatur ullam hic minus officiis sequi aspernatur, doloremque
              et nulla. Dolorem, officia architecto. Maiores voluptatum
              corporis, possimus harum eos veritatis aspernatur inventore qui
              molestiae laboriosam molestias labore nihil, debitis ad, nisi
              culpa recusandae atque numquam est nobis! Illo officia iusto, quae
              corporis nostrum libero esse voluptatum quasi atque excepturi
              officiis quibusdam ducimus temporibus explicabo id blanditiis
              sequi. Deleniti animi officia quae eligendi delectus tenetur nobis
              exercitationem sequi quis, cupiditate ea dolorem minus quidem
              ratione ullam illo magni rem ab laudantium iure dolore porro quas
              suscipit molestiae! Itaque sapiente eum placeat, impedit dolore
              reprehenderit repudiandae. Quaerat itaque, sequi praesentium, eos
              mollitia, deleniti ex dicta illum quam iure ad deserunt commodi ab
              quisquam alias distinctio cumque illo doloribus fuga! Reiciendis
              quisquam nihil, libero temporibus facilis mollitia perferendis est
              totam cumque iste quas minus harum delectus quam voluptatum
              voluptates fugit saepe rerum maxime eveniet ipsam et veniam rem
              iure. Dolor modi doloribus commodi expedita dolorem blanditiis
              dolores voluptatum laborum exercitationem cum, delectus explicabo.
              Quam nesciunt itaque aliquid animi commodi quaerat culpa sint
              aspernatur saepe repudiandae eos ipsum, eum ex voluptatem quis.
              Modi delectus esse animi magnam! Placeat harum inventore aliquam
              ullam? Ex accusantium cumque harum id consequatur, neque ratione
              eum veritatis magnam officia nisi nobis. Molestias voluptate sit
              velit consectetur tempore consequuntur? Aliquam commodi velit illo
              labore qui nobis recusandae fuga impedit ab? Incidunt ut provident
              commodi aperiam doloremque nostrum vel assumenda, blanditiis ipsum
              id! Ipsa itaque ullam eligendi debitis hic fugiat sequi
              consequatur odio corrupti! Sit, molestiae commodi! Perferendis
              asperiores earum dolor soluta necessitatibus vero voluptates,
              quaerat sint maiores voluptatibus commodi sapiente amet quo
              dignissimos aspernatur possimus vitae ullam itaque. Praesentium
              vel, culpa magnam, accusamus laboriosam autem animi hic cumque
              dolore, iste exercitationem sunt! A facere tenetur illum porro,
              quam minus at, nemo dolore iusto accusamus neque consequuntur
              quisquam dolores numquam eaque nesciunt quos ratione possimus rem
              libero qui impedit commodi voluptatem! Ex vero debitis molestiae
              minima delectus recusandae ad deserunt tempore cum corporis
              perspiciatis nisi totam reprehenderit quaerat blanditiis fugiat a
              beatae pariatur ab, quam itaque? Nesciunt consectetur placeat
              doloremque perferendis rem quos saepe cumque fugit quibusdam
              obcaecati ratione repellat veritatis odit, minus ullam commodi
              accusamus numquam rerum suscipit, dolor, quia voluptatem quae
              dolorem officia. Ut aperiam nesciunt voluptates maiores repellat?
              Unde numquam repellat aperiam vero atque aliquid commodi
              blanditiis porro, mollitia culpa animi maxime doloremque quam
              quos! Quibusdam modi vel maiores asperiores! Quia consequatur
              quaerat quo quae. Error assumenda nobis dicta at iusto quas
              recusandae qui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
