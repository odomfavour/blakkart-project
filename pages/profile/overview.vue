<template>
  <section>
    <div class="container">
        <div class="person-info-section">
            <div class="row">
            <div class="col-md-5">
                <div class="d-flex align-items-center">
                    <div class="img-box mr-3">
                        <img src="/profile-img.png" alt="person">
                    </div>
                    <div class="person-info">
                        <h3>Ngozi Chinedum</h3>
                        <p class="mb-0">ChinedumNgozi991@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="card-box text-center">
                        <b-icon icon="view-stacked"></b-icon>
                        <p class="text-uppercase">Measurements</p>
                    </div>
                    <div class="card-box text-center">
                        <b-icon icon="person-lines-fill"></b-icon>
                        <p class="text-uppercase">Following</p>
                    </div>
                    <div class="card-box text-center">
                        <b-icon icon="heart-fill"></b-icon>
                        <p class="text-uppercase">Wish List</p>
                    </div>
                    <div class="card-box text-center">
                        <b-icon icon="view-stacked"></b-icon>
                        <p class="text-uppercase">Viewed</p>
                    </div>
                    <div class="card-box text-center">
                        <b-icon icon="gear"></b-icon>
                        <p class="text-uppercase">Setting</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="mt-5">
            <div class="orders-section">
                <div class="d-flex justify-content-between align-items-center">
                    <h5>My Orders</h5>
                    <nuxt-link to="#" class="text-uppercase">view all <b-icon icon="chevron-right" class="ml-3"></b-icon></nuxt-link>
                </div>
                <hr>
                <div class="transaction-flow">
                    <div class="d-flex justify-content-between align-items-center px-5">
                        <div class="stage">
                            <div class="icon-box">
                                <img src="/profile/cart.png" alt="">
                            </div>
                            <p class="text-center">Cart</p>
                        </div>
                        <div class="stage">
                            <div class="icon-box">
                                <img src="/profile/processing.png" alt="">
                            </div>
                            <p class="text-center">Processing</p>
                        </div>
                        <div class="stage">
                            <div class="icon-box">
                                <img src="/profile/shipped.png" alt="">
                            </div>
                            <p class="text-center text-uppercase">Shipped</p>
                        </div>
                        <div class="stage">
                            <div class="icon-box">
                                <img src="/profile/completed.png" alt="">
                            </div>
                            <p class="text-center text-uppercase">completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <div class="others-section">
                <div class="row">
                    <div class="col-md-6">
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="text-uppercase mb-0">payment methods</p>
                            <nuxt-link to="#" class="text-uppercase">view all <b-icon icon="chevron-right" class="ml-3"></b-icon></nuxt-link>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="text-uppercase mb-0">shipping address</p>
                            <nuxt-link to="#" class="text-uppercase">view all <b-icon icon="chevron-right" class="ml-3"></b-icon></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    layout: 'profile',
    


}
</script>

<style scoped>

.card-box svg {
    height: 26px;
    width: 26px;
    color: #EB542B;
    margin-bottom: 12px;
}

.orders-section a, .transaction-flow a, .others-section a {
    color: #000;
    text-decoration: none;
}

.others-section a {
    font-size: 10px;
}

.orders-section a {
    font-size: 12px;
}

.person-info-section, .orders-section {
    margin-bottom: 100px;
}

.others-section {
    margin-bottom: 60px;
}
</style>