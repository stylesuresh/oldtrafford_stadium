<template>
  <main>
    <Header />

    <section>
      <div class="banner">
        <div class="banner-loc">
          <svg width="15" height="20" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.14474 2.39743C8.29509 0.93115 6.78593 0.0353418 5.10771 0.00110742C5.03607 -0.00036914 4.96396 -0.00036914 4.89229 0.00110742C3.2141 0.0353418 1.70494 0.93115 0.855263 2.39743C-0.0132293 3.8962 -0.036991 5.69651 0.791689 7.21329L4.26333 13.5676C4.26489 13.5704 4.26645 13.5733 4.26806 13.576C4.42081 13.8415 4.69444 14 5.00006 14C5.30565 14 5.57928 13.8415 5.73199 13.576C5.73361 13.5733 5.73517 13.5704 5.73672 13.5676L9.20837 7.21329C10.037 5.69651 10.0132 3.8962 9.14474 2.39743ZM5 6.34376C3.91443 6.34376 3.03125 5.46059 3.03125 4.37501C3.03125 3.28944 3.91443 2.40626 5 2.40626C6.08558 2.40626 6.96875 3.28944 6.96875 4.37501C6.96875 5.46059 6.0856 6.34376 5 6.34376Z" fill="#D3D5D7"/>
          </svg>
          <p class="mx-2">Old Trafford | Capacity: 75,643 – See what’s nearby</p>
        </div>

        <div class="banner-content">
            <div class="d-flex justify-content-center">
                <img src="../assets/images/Team Logos.png">
                <h1>Old Trafford</h1>
            </div>
        </div>
      </div> 

      <Matches />
      <StadiumInfo />
      <TicketInfo />

    </section>

    <Footer />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
      tab: null,
    }),

}
</script>
