<template>
  <section class="mt-4 account-section">
    <div class="container-fluid">
      <client-only>
        <b-tabs pills vertical>
          <b-tab title="EDIT PROFILE" active>
            <b-card-text>
              <div class="profile-box px-md-4 px-2 py-5">
                <edit-profile-form />
              </div> </b-card-text
          ></b-tab>
          <b-tab title="PASSWORD & SECURITY">
            <b-card-text
              ><div class="profile-box px-4 py-5">
                <edit-password />
              </div> </b-card-text
          ></b-tab>
          <b-tab title="NEWSLETTER & EMAIL NOTIFICATIONS"
            ><b-card-text>
              <div class="profile-box px-4 py-5">
                <newletter-notification />
              </div> </b-card-text
          ></b-tab>
        </b-tabs>
      </client-only>
    </div>
  </section>
</template>

<script>
import EditPassword from '~/components/Profile/EditPassword.vue'
import EditProfileForm from '~/components/Profile/EditProfileForm.vue'
import NewletterNotification from '~/components/Profile/NewletterNotification.vue'
export default {
  components: { EditProfileForm, EditPassword, NewletterNotification },
  layout: 'profile',
}
</script>

<style scoped>
.profile-box {
  background: #f4f4f4;
}

@media (max-width: 426px) {
  .profile-box {
    margin-top: 20px;
  }
  
  .profile-box label {
    font-size: 14px !important;
  }
}


</style>