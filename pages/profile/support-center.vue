<template>
  <section>
    <div class="container">
      <div class="d-flex justify-content-end align-items-center mb-5">
        <button class="btn btn-primary">Contact Support</button>
      </div>
      <h2 class="text-center font-weight-bold">How can we help you?</h2>
      <div class="my-4 search-shrink">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text bg-dark text-white" id="basic-addon2" role="button"><b-icon icon="search"></b-icon></span>
        </div>
      </div>
      <div class="d-flex align-items-center w-or">
        <hr class="or-border" />
        <p class="or-text mb-1">or</p>
        <hr class="or-border" />
      </div>
      <div class="d-flex mx-auto centered-cards my-5">
        <div class="row">
          <div class="col-6">
            <div class="text-center grayed p-4">
              <b-icon icon="question-circle-fill" font-scale="3"></b-icon>
              <h5 class="my-2 font-weight-bold">Getting Started</h5>
              <small
                >Learn everything that helps you get started with
                Blakkart.</small
              >
            </div>
          </div>
          <div class="col-6">
            <div class="text-center grayed p-4">
              <b-icon icon="file-earmark-fill" font-scale="3"></b-icon>
              <h5 class="my-2 font-weight-bold">FAQs</h5>
              <small>Read answered questions</small>
            </div>
          </div>
        </div>
      </div>
      <div class="my-4" v-if="isGettingStarted">
        <h5 class="mb-3">Getting Started</h5>
        <div class="accordion" role="tablist">
          <b-card
            no-body
            class="mb-1"
            v-for="(question, index) in questions"
            :key="index"
          >
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle="'accordion-' + index" variant="light"
                ><div class="d-flex w-100">
                  <p class="w-100 text-left mb-0">Blakkart Privacy Policy</p>

                  <span class="when-opened" v-if="question.isVisible">
                    <b-icon icon="chevron-up"></b-icon>
                  </span>
                  <span class="when-closed" v-else>
                    <b-icon icon="chevron-down"></b-icon>
                  </span></div
              ></b-button>
            </b-card-header>
            <b-collapse
              :id="`accordion-${index}`"
              accordion="my-accordion"
              role="tabpanel"
              v-model="questions[index].isVisible"
            >
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
      <div class="my-4">
        <h5 class="mb-3 font-weight-bold">Frequently Asked Questions</h5>
        <div class="accordion" role="tablist">
          <b-card
            no-body
            class="mb-1"
            v-for="(question, index) in faqs"
            :key="index"
          >
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle="'faq-' + index" variant="light"
                ><div class="d-flex w-100">
                  <p class="w-100 text-left mb-0">Blakkart Privacy Policy</p>

                  <span class="when-opened" v-if="question.isVisible">
                    <b-icon icon="chevron-up"></b-icon>
                  </span>
                  <span class="when-closed" v-else>
                    <b-icon icon="chevron-down"></b-icon>
                  </span></div
              ></b-button>
            </b-card-header>
            <b-collapse
              :id="`faq-${index}`"
              accordion="my-accordion"
              role="tabpanel"
              v-model="faqs[index].isVisible"
            >
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'profile',
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      questions: [
        { isVisible: true },
        { isVisible: false },
        { isVisible: false },
      ],
      faqs: [
        { isVisible: true },
        { isVisible: false },
        { isVisible: false },
      ],
      isGettingStarted: true
    }
  },
}
</script>

<style scoped>
.grayed {
  background: #f4f4f4;
  height: 100%;
}

.grayed svg {
  fill: #eb542b;
  font-size: 70px;
}

.centered-cards {
  width: 60%;
}

.or-border {
  width: 43%;
  background-color: #000;
}

.w-or {
  width: 30%;
  margin: 0 auto;
}

.search-shrink {
  width: 50%;
  margin: 0 auto;
}
/* 
 .collapsed > .when-opened,
    :not(.collapsed) > .when-closed {
        display: none;
    } */
</style>