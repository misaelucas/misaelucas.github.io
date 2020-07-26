<template>
  <div>
    <main class="font-sans">
      <div>
        <header class="bg-white shadow border-t-4 border-indigo-600">
          <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
              <div>
                <a class="flex items-center text-gray-800 hover:text-indigo-600" href="#">
                  <svg
                    class="h-6 w-6 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>

                  <span class="mx-3 font-medium text-sm md:text-base">misa</span>
                </a>
              </div>
              <div class="flex items-center -mx-2">
                <a class="flex items-center mx-2 text-gray-800 hover:text-indigo-600" href="/blog">
                  <svg
                    class="h-5 w-5 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>

                <a
                  class="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
                  href="https://github.com/misaelucas"
                >
                  <svg
                    class="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>

        <section class="bg-white mt-20 container-um">
          <div class="max-w-2xl px-6 text-center mx-auto">
            <a class="text-3xl font-semibold text-gray-800 flex justify-center" style="font-family: 'IBM Plex Mono', monospace;">
              <img class="rounded-full h-10 w-10 mr-5" src="@/assets/media/Dante.png">Olá, eu sou o Misael.
            </a>
            <p
              class="text-gray-600 mt-4"
            >Desenvolvo o front-end de aplicações web utilizando principalmente bootstrap e javascript, atualmente estou me dedicando em aprender Vue.</p>
          </div>
        </section>
        <hr class="rounded bg-gray-900 text-gray-900 mt-20" />
        <section class="bg-white py-20">
            <h3 class="text-2xl font-semibold text-gray-800">Essas são as tecnologias que posso utilizar como instrumento de criação</h3>
            <div class="imagens">
                <svg viewBox="0 0 128 128" width="100px" ><path fill="#E44D26" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499 8.096-90.102h-88.862zm72.041 20.471l-.507 5.834-.223 2.695h-42.569l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69-22.79 6.134v-.005l-.027.012-22.777-5.916-1.546-17.055h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649 1.296-13.728h-38.555l-2.734-30.836-.267-3.164h55.724000000000004l-.266 2.471zM27.956 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.738 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.777 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.513 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path></svg>
                <svg viewBox="0 0 128 128" width="100px"><path fill="#1572B6" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063 8.078-90.48h-88.66zm69.21 50.488l-2.35 21.892.009 1.875-22.539 6.295v.001l-.018.015-22.719-6.225-1.537-17.341h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495 1.308-14.549h-25.907000000000004l-.222-2.355-.506-5.647-.265-2.998h27.886000000000003l1.014-11h-42.473l-.223-2.589-.506-6.03-.265-3.381h55.597l-.267 3.334-2.685 30.154"></path><path fill="#1572B6" d="M89 14.374l-7.149-8.374h7.149v-5h-16v4.363l8.39 7.637h-8.39v5h16zM70 14.374l-6.807-8.374h6.807v-5h-15v4.363l7.733 7.637h-7.733v5h15zM52 13h-8v-7h8v-5h-14v17h14z"></path></svg> 
                <svg viewBox="0 0 128 128" width="100px"> <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg>
                <svg style="margin-left: 10px" viewBox="0 0 128 128" width="100px"><path fill="#5B4282" d="M9.531 112.586h4.161c1.896 0 3.273.27 4.129.81.857.54 1.285 1.398 1.285 2.575 0 .799-.188 1.454-.563 1.966s-.874.82-1.496.924v.091c.848.189 1.459.543 1.834 1.061s.563 1.207.563 2.067c0 1.22-.44 2.171-1.322 2.854-.881.683-2.078 1.024-3.59 1.024h-5.001v-13.372zm2.835 5.296h1.646c.768 0 1.325-.119 1.669-.356.345-.238.517-.631.517-1.18 0-.512-.187-.879-.562-1.102s-.968-.334-1.779-.334h-1.491v2.972zm0 2.25v3.485h1.848c.78 0 1.356-.149 1.729-.448s.558-.756.558-1.372c0-1.109-.793-1.665-2.378-1.665h-1.757zM34.252 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.087 1.183 1.631 2.885 1.631 5.104zm-9.758 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM49.161 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.086 1.183 1.631 2.885 1.631 5.104zm-9.759 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM57.09 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM70.671 122.245c0 1.208-.434 2.159-1.303 2.854-.869.695-2.078 1.043-3.626 1.043-1.427 0-2.689-.269-3.786-.805v-2.634c.902.402 1.666.686 2.291.851s1.196.247 1.715.247c.622 0 1.099-.119 1.431-.356.333-.238.499-.591.499-1.061 0-.262-.073-.495-.219-.7-.146-.204-.361-.401-.645-.59s-.861-.491-1.733-.905c-.817-.384-1.43-.753-1.838-1.107-.409-.354-.735-.765-.979-1.234-.244-.47-.366-1.019-.366-1.646 0-1.183.401-2.113 1.203-2.79s1.91-1.015 3.325-1.015c.695 0 1.358.082 1.989.247.631.165 1.291.396 1.98.695l-.915 2.204c-.713-.292-1.303-.497-1.77-.613-.467-.116-.925-.174-1.376-.174-.537 0-.948.125-1.235.375-.287.25-.43.576-.43.979 0 .25.058.468.174.654.116.186.3.366.553.54.253.174.852.486 1.797.938 1.25.598 2.107 1.197 2.57 1.797s.694 1.334.694 2.206zM78.254 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM86.778 120.827v5.131h-2.835v-13.372h3.896c1.817 0 3.161.331 4.033.992.872.662 1.308 1.667 1.308 3.014 0 .787-.216 1.486-.649 2.099s-1.046 1.093-1.838 1.44c2.012 3.006 3.323 4.948 3.933 5.826h-3.146l-3.192-5.131h-1.51zm0-2.305h.915c.896 0 1.558-.149 1.985-.448s.64-.769.64-1.409c0-.634-.218-1.085-.654-1.354-.436-.268-1.111-.402-2.026-.402h-.86v3.613zM104.494 125.958l-.97-3.183h-4.875l-.97 3.183h-3.055l4.719-13.426h3.466l4.738 13.426h-3.053zm-1.647-5.561c-.896-2.884-1.401-4.515-1.514-4.893-.113-.378-.193-.677-.242-.896-.201.78-.777 2.71-1.729 5.789h3.485zM118.469 116.757c0 1.439-.45 2.54-1.349 3.301-.899.763-2.178 1.144-3.837 1.144h-1.216v4.756h-2.835v-13.372h4.271c1.622 0 2.855.349 3.7 1.047.844.699 1.266 1.74 1.266 3.124zm-6.402 2.122h.933c.872 0 1.524-.172 1.957-.517.433-.345.649-.846.649-1.504 0-.665-.182-1.156-.544-1.473-.363-.317-.932-.476-1.706-.476h-1.29v3.97zM73.951 56.759c-1.983-.653-4.838-.759-8.565-.759h-13.386v20h14.424c2.502 0 4.259-.249 5.271-.437 1.783-.318 3.274-.93 4.472-1.676 1.198-.744 2.183-1.869 2.955-3.293.771-1.424 1.158-3.087 1.158-4.951 0-2.184-.559-3.98-1.677-5.59-1.117-1.611-2.668-2.642-4.652-3.294zM71.895 48.147c1.97-.586 3.455-1.646 4.452-3.003.999-1.357 1.498-3.103 1.498-5.154 0-1.943-.466-3.675-1.398-5.154-.932-1.478-2.263-2.481-3.992-3.027-1.732-.544-4.7-.809-8.906-.809h-11.549v18h12.507c3.435 0 5.897-.399 7.388-.853zM117 16.126c0-7.802-6.325-14.126-14.127-14.126h-77.746c-7.802 0-14.127 6.324-14.127 14.126v77.748c0 7.802 6.325 14.126 14.127 14.126h77.746c7.802 0 14.127-6.324 14.127-14.126v-77.748zm-30.43 57.144c-1.157 2.356-2.589 4.173-4.292 5.451-1.704 1.277-3.841 2.446-6.41 3.098-2.569.653-5.717 1.181-9.444 1.181h-22.424v-59h22.065c4.473 0 8.059.62 10.761 1.804 2.703 1.185 4.818 3.021 6.351 5.483 1.53 2.463 2.296 5.046 2.296 7.735 0 2.502-.68 4.861-2.036 7.071-1.358 2.21-3.408 3.995-6.15 5.352 3.54 1.038 6.263 2.811 8.166 5.313 1.903 2.503 2.855 5.458 2.855 8.866-.001 2.742-.579 5.291-1.738 7.646z"></path></svg>

            </div>
            <div class="imagens">
                <img src="https://devicons.github.io/devicon/devicon.git/icons/vuejs/vuejs-original-wordmark.svg" width="100px">
                <img src="https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg" width="100px">
                <svg viewBox="0 0 128 128" width="100px"><path d="M127 44.9c0-4.3-3.5-7.9-7.9-7.9h-110.2c-4.4 0-7.9 3.5-7.9 7.9v39.3c0 4.3 3.5 7.8 7.9 7.8h110.3c4.3 0 7.9-3.5 7.9-7.9v-39.2zm-2 39.2c0 3.2-2.6 5.9-5.9 5.9h-110.2c-3.3 0-5.9-2.6-5.9-5.9v-39.2c0-3.3 2.6-5.9 5.9-5.9h110.2c3.2 0 5.9 2.6 5.9 5.9v39.2zM30 46h-6v9.2c-1-.2-1.7-.3-2.6-.3-6.1 0-10.1 3.9-10.1 9.9 0 6.2 3.9 9.4 11 9.4 2.4 0 4.8-.2 7.8-.8v-27.4zm-6 23.3c-1 .1-1.5.2-2.1.2-3 0-4.7-1.7-4.7-4.8 0-3.2 1.8-5 4.8-5 .7 0 1.1.1 2.1.3v9.3zM33 46h6v6h-6zM33 66.9c0 5.1-.2 7-1 8.7-.8 1.6-2 2.7-4.6 3.9l5.5 2.6c2.6-1.3 3.9-2.5 4.8-4.3 1-1.9 1.4-4.2 1.4-8.9v-13.9h-6v11.9zM50.5 54.9c-2.7 0-4.5.5-7.5 1.8v4.5c2-1.2 4.3-1.8 6.4-1.8 1.5 0 1.6.4 1.6 1.4v1.3c-6 .6-9.9 2.5-9.9 6.6 0 3.8 1.9 5.5 6.8 5.5 2.4 0 6.1-.3 8.1-.6v-11.9c0-2.4.4-3.6-.1-4.5-.9-1.5-2.4-2.3-5.4-2.3zm.5 15c-1 .2-1.6.3-2.5.3-1.6 0-2.5-.5-2.5-1.7 0-1.5 2-2.1 5-2.5v3.9zM68.5 54.9c-2.9 0-5.5.4-9.5 1.3v17.8h6v-13.9c1-.3 2.1-.4 2.9-.4 2.1 0 3.1.8 3.1 3.1v11.2h6v-11.5c0-2.9-.6-4.3-1.8-5.6-1.3-1.3-3.7-2-6.7-2zM97.5 60l2.1-4.2c-2.8-.6-5.1-.8-7.6-.8-8.6 0-13.4 3.8-13.4 10.4 0 5.4 3.3 8.8 8.4 8.8 1.5 0 2.8-.2 3.8-.8v.1c0 3.7-1.8 5.3-5.6 5.3-2.2 0-4.4-.5-6.4-1.6v5.4c2 .8 4.1 1.1 6.4 1.1 4.5 0 7.9-1.4 9.7-4.3 1.3-1.9 1.9-4.3 1.9-9.3v-1.6l-.2-2.4-.2-3.1-.4-2.5v-.6c2 .1 0-.2 1.5.1zm-6.5 8.6v.4c-1 .2-1.4.4-2.2.4-2.6 0-4-1.7-4-4.6 0-2.1.7-3.8 2.1-4.6.9-.6 2.2-1.2 3.4-1.2h.7v9.6zM108.9 54.9c-6 0-9.7 3.8-9.7 10 0 5.9 3.6 9.6 9.5 9.6s9.7-3.8 9.7-10c-.1-6-3.7-9.6-9.5-9.6zm-.1 14.9c-2.3 0-3.6-1.9-3.6-5.1 0-3.2 1.3-5.1 3.7-5.1 2.2 0 3.5 1.9 3.5 5.1-.1 3.2-1.4 5.1-3.6 5.1z"></path></svg>
            </div>

           

        </section>

        <section class="bg-gray-800 pattern py-20">
          <div class="max-w-5xl px-6 mx-auto text-center">
            <h2 class="text-2xl font-semibold text-white">About Me</h2>

            <p
              class="text-gray-400 mt-4"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim cursus lorem ac. Orci maecenas praesent arcu eget orci est orci nullam. Leo purus est pellentesque massa at tortor, est. Aliquet pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.</p>
          </div>
        </section>

        <section class="bg-white py-20">
          <div class="max-w-5xl px-6 mx-auto text-center">
            <h2 class="text-2xl font-semibold text-gray-800">Latest Posts</h2>

            <div class="flex flex-col items-center justify-center mt-6">
              <a
                class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                href="#"
              >
                <div class="flex items-center justify-between px-4 py-2">
                  <h3
                    class="text-lg font-medium text-gray-700"
                  >Easy, Free Laravel CI Using GitHub Actions</h3>
                  <span class="block text-gray-600 font-light text-sm">20 Jan 2020</span>
                </div>
              </a>

              <a
                class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                href="#"
              >
                <div class="flex items-center justify-between px-4 py-2">
                  <h3
                    class="text-lg font-medium text-gray-700"
                  >Pest: a delightful PHP Testing Framework</h3>
                  <span class="block text-gray-600 font-light text-sm">29 Oct 2019</span>
                </div>
              </a>

              <a
                class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                href="#"
              >
                <div class="flex items-center justify-between px-4 py-2">
                  <h3 class="text-lg font-medium text-gray-700">Using inline SVGs in Vue components</h3>
                  <span class="block text-gray-600 font-light text-sm">15 Oct 2019</span>
                </div>
              </a>

              <a
                class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                href="#"
              >
                <div class="flex items-center justify-between px-4 py-2">
                  <h3
                    class="text-lg font-medium text-gray-700"
                  >Acceptance Testing Laravel & VueJs Apps with Codeception</h3>
                  <span class="block text-gray-600 font-light text-sm">3 Oct 2019</span>
                </div>
              </a>
            </div>

            <div class="flex items-center justify-center mt-12">
              <a
                class="flex items-center text-gray-600 hover:underline hover:text-gray-500"
                href="#"
              >
                <span>View More</span>

                <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section class="bg-gray-800 pattern py-20">
          <div class="max-w-5xl px-6 mx-auto text-center">
            <h2 class="text-2xl font-semibold text-white">Projects</h2>

            <div class="flex items-center justify-center mt-10">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div class="max-w-xs w-full">
                  <div
                    class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden"
                  >
                    <img
                      class="object-cover h-8"
                      src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
                      alt
                    />
                  </div>

                  <a
                    href="#"
                    class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div class="py-2 px-3 text-center text-sm">
                      <p
                        class="text-gray-300"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                    </div>
                  </a>
                </div>

                <div class="max-w-xs w-full">
                  <div
                    class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden"
                  >
                    <img
                      class="object-cover h-8"
                      src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
                      alt
                    />
                  </div>

                  <a
                    href="#"
                    class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div class="py-2 px-3 text-center text-sm">
                      <p
                        class="text-gray-300"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                    </div>
                  </a>
                </div>

                <div class="max-w-xs w-full">
                  <div
                    class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden"
                  >
                    <img
                      class="object-cover h-8"
                      src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
                      alt
                    />
                  </div>

                  <a
                    href="#"
                    class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div class="py-2 px-3 text-center text-sm">
                      <p
                        class="text-gray-300"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center mt-12">
              <a class="flex items-center text-white hover:underline hover:text-gray-200" href="#">
                <span>View More On Github</span>

                <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <footer class="bg-white">
          <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
              <div>
                <div class="text-gray-600">&copy; Misael Lucas</div>
              </div>

              <div class="flex items-center -mx-2">
                <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="#">
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>

                <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="#">
                  <svg
                    class="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                    />
                  </svg>
                </a>

                <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="#">
                  <svg
                    class="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  </div>
</template>
<script>
</script>
<style>
header {
    position: absolute;
    top: 0%;
    width: 100%;
}

.imagens {
    display: flex;
    justify-content: center;
    margin-top: 5% !important;
    flex-direction: row;

    
}


.pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23a0aec0' fill-opacity='0.1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #cbd5e0;
}
::-webkit-scrollbar-thumb {
  background: #2d3748;
}
::-webkit-scrollbar-thumb:hover {
  background: #718096;
}
</style>