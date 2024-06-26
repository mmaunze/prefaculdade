<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "home",
      color: "bg-gradient-success",
      label: "Testes Vocacionais",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav  
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3',
        ]"
        :to="{ name: 'home' }"
        rel="tooltip"
        title="Prefaculdade"
        data-placement="bottom"
      >
        Prefaculdade
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="Designed and Coded byPrefaculdade"
        data-placement="bottom"
      >
        Prefaculdade
      </RouterLink>

      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <!--Cursos -->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="cursos"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >school</i
              >
              Cursos
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="cursos"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <router-link
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      :to="{ name :'cursos-licenciatura'}"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Cursos de Licenciatura
                      </h6>
                      <span class="text-sm">Cursos do Ensino Superior</span>
                    </router-link>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <router-link
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      :to="{ name : 'cursos-medios' }"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Cursos Medios
                      </h6>
                      <span class="text-sm"
                        >Cursos do Ensino Técnico Profissional</span
                      >
                    </router-link>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <router-link
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      :to="{ name :'cursos-curta-duracao'}"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Cursos Profissionalizantes
                      </h6>
                      <span class="text-sm">Cursos de Curta duracao</span>
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <router-link
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    :to="{ name :'cursos-licenciatura'}"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Cursos de Licenciatura
                    </h6>
                    <span class="text-sm">Cursos do Ensino Superior</span>
                  </router-link>
                  <router-link
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    :to="{ name :'cursos-medios'}"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Cursos Medios
                    </h6>
                    <span class="text-sm"
                      >Cursos de Ensino Técnico Profissional</span
                    >
                  </router-link>
                  <router-link
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    :to="{ name :'cursos-curta-duracao'}"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Cursos Profissionalizantes
                    </h6>
                    <span class="text-sm">Cursos de curta duracao</span>
                  </router-link>
                </div>
              </div>
            </div>
          </li>
          <!-- Escolas -->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="cursos"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >dashboard</i
              >
              Instituições de Ensino
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="cursos"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <router-link
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      :to="{ name : 'ensino-superior' }"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                      Ensino Superior
                      </h6>
                      <span class="text-sm">Instituições de Ensino Superior</span>
                    </router-link>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <router-link
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      :to="{ name : 'ensino-medio' }"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Ensino Medio
                      </h6>
                      <span class="text-sm"
                        >Instituições do Ensino Técnico Profissional</span
                      >
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <router-link
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    :to="{ name : 'ensino-superior' }"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                    Ensino Superior
                    </h6>
                    <span class="text-sm">Instituições de Ensino Superior</span>
                  </router-link>
                  <router-link
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    :to="{ name : 'ensino-medio' }"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Ensino Medio
                    </h6>
                    <span class="text-sm"
                      >Instituições de Ensino Técnico Profissional</span
                    >
                  </router-link>
                </div>
              </div>
            </div>
          </li>
          <!--Exames-->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="exames"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >quiz</i
              >
              Exames de Admissão
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="exames"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/overview/material-kit/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Universidades
                      </h6>
                      <span class="text-sm"
                        >Exames UEM, UP, Unisave, etc ...</span
                      >
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/colors/material-kit/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Institutos
                      </h6>
                      <span class="text-sm"
                        >Exames ISCISA, ISPG, ISPT, ISCAM, etc ...</span
                      >
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/alerts/material-kit/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Exames Prefaculdade
                      </h6>
                      <span class="text-sm"
                        >Exames Gerados Pela Plataforma</span
                      >
                    </a>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Universidades
                    </h6>
                    <span class="text-sm"
                      >Exames UEM, UP, Unisave, etc ...</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Institutos
                    </h6>
                    <span class="text-sm"
                      >Exames ISCISA, ISPG, ISPT, ISCAM, etc ...</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Exames Pre Faculdade
                    </h6>
                    <span class="text-sm">Exames Gerados Pela Plataforma</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <!-- Quem somos -->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <router-link
            :to="{ name: 'sobre' }"
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="sobre"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >help</i
              >
              Quem somos
            </router-link>
            
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <router-link
              :to="action.route"
              class="btn btn-sm mb-0"
              :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')"
              >{{ action.label }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
