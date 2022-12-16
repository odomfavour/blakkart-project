<template>
  <section class="security-section">
    <client-only>
      <b-tabs pills vertical>
        <b-tab title="Privacy policy" active
          ><b-card-text>Tab contents 1</b-card-text></b-tab
        >
        <b-tab title="Terms of service "
          ><b-card-text>Tab contents 2</b-card-text></b-tab
        >
        <b-tab title="FAQ"><b-card-text>Tab contents 3</b-card-text></b-tab>
        <b-tab title="Support"
          ><b-card-text>
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
                      <b-icon
                        icon="question-circle-fill"
                        class="mr-4"
                        style="color: #eb542b"
                      ></b-icon>
                      <p class="w-100 text-left mb-0">
                        Blakkart Privacy Policy
                      </p>

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
          </b-card-text></b-tab
        >
      </b-tabs>
    </client-only>
  </section>
</template>

<script>
export default {
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
      faqs: [{ isVisible: true }, { isVisible: false }, { isVisible: false }],
    }
  },
}
</script>

<style scoped>
.security-section .nav-pills .nav-item {
  width: 100% !important;
}

.security-section .accordion > .card > .card-header button{
    background: #fff !important;
    border: 2px solid #fff !important
}
</style>