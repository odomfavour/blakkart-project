<template>
  <form>
    <div class="py-3 text-center position-relative">
      <b-img
        v-bind="{
          blank: true,
          width: 120,
          height: 120,
          class: 'm1',
        }"
        rounded="circle"
        blank-color="#777"
        alt="Transparent image"
      ></b-img>
      <div class="edit-pen" role="button">
        <b-icon icon="pen"></b-icon>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >First Name</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Last Name</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Doe"
          />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Doe"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Phone Number</label
      >
      <input
        type="tel"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Doe"
      />
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Country</label
          >
          <select class="form-control" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">State</label>
          <select class="form-control" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Zip Code</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Last Name</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Doe"
          />
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-3">
      <button class="btn btn-primary">Save Changes</button>
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style scoped>
.edit-pen {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #EB542B;
  color: white;
  padding: 3px;
  position: absolute;
  bottom: 15px;
  left: 55%;
  /* transform: translateX(-50%); */
}
</style>