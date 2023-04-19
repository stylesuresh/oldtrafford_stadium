<template>
    <main>
        <div class="match_sec">
            <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="center"
            >
            <v-tab :value="1">Upcoming Matches</v-tab>
            <v-tab :value="2">Stadium Information</v-tab>
            <v-tab :value="3">FAQ</v-tab>
            </v-tabs>

            <!-- <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="1">
                One
                </v-window-item>

                <v-window-item value="2">
                Two
                </v-window-item>

                <v-window-item value="3">
                Three
                </v-window-item>
            </v-window>
            </v-card-text> -->

            <div class="container-fluid main_content">
                <div class="row">
                    <div class="col-md-12 col-lg-4 col-xs-12">
                        <v-card class="filter_card">
                            <div class="p-4">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 16.25C9 16.0511 9.07902 15.8603 9.21967 15.7197C9.36032 15.579 9.55109 15.5 9.75 15.5H14.25C14.4489 15.5 14.6397 15.579 14.7803 15.7197C14.921 15.8603 15 16.0511 15 16.25C15 16.4489 14.921 16.6397 14.7803 16.7803C14.6397 16.921 14.4489 17 14.25 17H9.75C9.55109 17 9.36032 16.921 9.21967 16.7803C9.07902 16.6397 9 16.4489 9 16.25ZM6 11.75C6 11.5511 6.07902 11.3603 6.21967 11.2197C6.36032 11.079 6.55109 11 6.75 11H17.25C17.4489 11 17.6397 11.079 17.7803 11.2197C17.921 11.3603 18 11.5511 18 11.75C18 11.9489 17.921 12.1397 17.7803 12.2803C17.6397 12.421 17.4489 12.5 17.25 12.5H6.75C6.55109 12.5 6.36032 12.421 6.21967 12.2803C6.07902 12.1397 6 11.9489 6 11.75ZM3 7.25C3 7.05109 3.07902 6.86032 3.21967 6.71967C3.36032 6.57902 3.55109 6.5 3.75 6.5H20.25C20.4489 6.5 20.6397 6.57902 20.7803 6.71967C20.921 6.86032 21 7.05109 21 7.25C21 7.44891 20.921 7.63968 20.7803 7.78033C20.6397 7.92098 20.4489 8 20.25 8H3.75C3.55109 8 3.36032 7.92098 3.21967 7.78033C3.07902 7.63968 3 7.44891 3 7.25Z" fill="#0D0033"/>
                                        </svg>
                                        <h5>Filter Results</h5>
                                    </div>

                                    <v-btn variant="tonal" class="reset_btn">
                                    Reset Filters
                                    </v-btn>
                                </div>
                                <h5>Fixture Date</h5>
                                <v-row>
                                    <v-col>
                                        <v-menu
                                        ref="date1StartMenu"
                                        v-model="date1.start.menu"
                                        min-width="auto"
                                        offset-y
                                        transition="scale-transition"
                                        :close-on-content-click="false"
                                        :return-value.sync="date1.start.value"
                                        >
                                        <template v-slot:activator="{ attrs, on }">
                                            <v-text-field
                                            v-model="date1.start.value"
                                            label="Start"
                                            prepend-inner-icon="mdi-calendar"
                                            outlined
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            >
                                            </v-text-field>
                                        </template>
                                        <v-date-picker v-model="date1.start.value" no-title scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="date1.start.menu = false">
                                            Cancel
                                            </v-btn>
                                            <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.date1StartMenu.save(date1.start.value)"
                                            >
                                            OK
                                            </v-btn>
                                        </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col>
                                        <v-menu
                                        ref="date1EndMenu"
                                        v-model="date1.end.menu"
                                        min-width="auto"
                                        offset-y
                                        transition="scale-transition"
                                        :close-on-content-click="false"
                                        :return-value.sync="date1.start.value"
                                        >
                                        <template v-slot:activator="{ attrs, on }">
                                            <v-text-field
                                            v-model="date1.end.value"
                                            label="End"
                                            prepend-inner-icon="mdi-calendar"
                                            outlined
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            >
                                            </v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="date1.end.value"
                                            no-title
                                            scrollable
                                            :allowed-dates="date1EndAllowedDates"
                                        >
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="date1.end.menu = false">
                                            Cancel
                                            </v-btn>
                                            <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.date1EndMenu.save(date1.end.value)"
                                            >
                                            OK
                                            </v-btn>
                                        </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    </v-row>
                                <div class="">
                                    <h5>Tournament</h5>

                                </div>
                                <div v-for="(tournament,index) in filter_datas.tournament" :key="index">
                                    <div class="d-flex justify-content-between">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label" for="defaultCheck1">
                                                {{ tournament.name }}
                                            </label>
                                        </div>
                                        <p>({{ tournament.total }})</p>
                                    </div>
                                </div>

                                <div class="">
                                    <h5>Team</h5>

                                </div>
                                <div v-for="(team,index) in filter_datas.team" :key="index">
                                    <div class="d-flex justify-content-between">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label" for="defaultCheck1">
                                                {{ team.name }}
                                            </label>
                                        </div>
                                        <p>({{ team.total }})</p>
                                    </div>
                                </div>

                            </div>
                        </v-card>

                        <div class="sell_ticket_sec">
                            <div class="d-flex">                           
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_1441)">
                                <path d="M19.0132 0.987256C18.4121 0.386095 17.5829 0.0378362 16.6791 0.00466874C15.8209 -0.0284988 14.9419 0.211966 14.1459 0.701186C13.7935 0.916775 13.6816 1.37697 13.8972 1.72523C14.1128 2.07764 14.573 2.18958 14.9212 1.97399C16.0033 1.31064 17.2512 1.33966 17.956 2.04447C18.3706 2.45906 18.5613 3.06023 18.4909 3.73601C18.4162 4.46984 18.0555 5.19124 17.4751 5.77167C16.8947 6.3521 16.1691 6.7128 15.4395 6.78742C14.7637 6.85376 14.1625 6.66305 13.7479 6.2526C13.4784 5.98311 13.1219 5.838 12.7446 5.838C12.3632 5.838 12.0066 5.98726 11.7371 6.2526C11.4676 6.52208 11.3225 6.87863 11.3225 7.26006C11.3225 7.64149 11.4718 7.99804 11.7413 8.26752C12.0108 8.53701 12.3673 8.68212 12.7446 8.68212C13.126 8.68212 13.4826 8.53286 13.7521 8.26752C13.8101 8.20948 13.864 8.14729 13.9096 8.08096C14.3035 8.22192 14.7264 8.29655 15.1741 8.29655C15.3109 8.29655 15.4519 8.28825 15.5929 8.27582C15.6053 8.27582 15.6177 8.27167 15.6302 8.27167L15.7587 10.1332C15.7877 10.5561 15.6302 10.9707 15.3317 11.2733L8.37893 18.2178C7.98921 18.6075 7.35074 18.6075 6.96102 18.2178L1.78275 13.0395C1.59204 12.8488 1.48839 12.5959 1.48839 12.3305C1.48839 12.0611 1.59204 11.8123 1.78275 11.6216L8.73133 4.673C9.02984 4.37449 9.44443 4.21694 9.86732 4.24596L16.0406 4.65641C16.4511 4.68543 16.8076 4.37449 16.8366 3.95989C16.8657 3.54945 16.5547 3.1929 16.1401 3.16387L9.96682 2.75343C9.1169 2.69538 8.27943 3.01047 7.67827 3.61578L0.729684 10.5644C0.257048 11.037 0 11.663 0 12.3305C0 12.998 0.261194 13.6241 0.729684 14.0967L5.90381 19.2708C6.38888 19.7559 7.0315 20.0005 7.66997 20.0005C8.30845 20.0005 8.94692 19.7559 9.43614 19.2708L16.3847 12.3223C16.99 11.7169 17.3051 10.8795 17.2471 10.0254L17.0978 7.84464C17.6202 7.59588 18.1053 7.25177 18.5365 6.82474C19.3574 6.00384 19.8715 4.95906 19.9792 3.88527C20.0912 2.75343 19.7471 1.72523 19.0132 0.987256Z" fill="#0D0033"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_1441">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <h5>Do you have a ticket to sell?</h5>
                            </div>
                            <p class="sell_content">Want to list your tickets on our site? Click <br>through to find out more</p>
                            <div class="halfcircle1"></div>
                            <div class="halfcircle2"></div>
                            <button type="button" class="sell_btn">
                                Sell your tickets
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-8 col-xs-12 match_details">
                        <h3>Upcoming Old Trafford Matches</h3>

                        <div class="" v-for="(match,index) in filter_results.data" :key="index">
                            <div class="match_info">
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-xs-2">
                                        <div class="date_sec">
                                            <img class="cal_top" src="../assets/images/cal.png">
                                            <div class="date">{{ match.fixture_date | formatDay }}</div>
                                            <div class="empty">{{ match.fixture_date | formatMonth }}</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-xs-10">
                                        <div class="match_detail">
                                            <div class="team_logos">
                                                <img v-bind:src="match.team1_logo" class="teamlogo">
                                                <span class="mx-2">VS</span>
                                                <img v-bind:src="match.team2_logo" class="teamlogo">
                                            </div>
                                            <div>
                                                <h6 class="league">{{ match.tournament_name }}</h6>
                                                <h5 class="teams">{{ match.team1_name }} vs {{ match.team2_name }}</h5>
                                            </div>
                                            <div class="btn_grp_sec">
                                                <button type="button" class="buy_btn">Buy</button>
                                                <div class="halfcircle1"></div>
                                                <div class="halfcircle2"></div>
                                            </div>

                                        </div>
                                        <div class="bottom_content">
                                            <div class="d-flex">
                                                <svg class="m-auto" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.6875 2.6405H0.3125C0.139938 2.6405 0 2.78044 0 2.953V14.0469C0 14.2195 0.139938 14.3594 0.3125 14.3594H15.6875C15.8601 14.3594 16 14.2195 16 14.0469V2.953C16 2.78044 15.8601 2.6405 15.6875 2.6405ZM7.6875 10.5381C6.69834 10.3871 5.93816 9.53064 5.93816 8.49995C5.93816 7.46926 6.69834 6.61279 7.6875 6.46176V10.5381ZM8.3125 6.46176C9.30166 6.61279 10.0618 7.46926 10.0618 8.49995C10.0618 9.53064 9.30166 10.3871 8.3125 10.5381V6.46176ZM0.625 6.31645H2.48472V10.6835H0.625V6.31645ZM0.625 11.3085H2.79722C2.96978 11.3085 3.10972 11.1685 3.10972 10.996V6.00394C3.10972 5.83138 2.96978 5.69144 2.79722 5.69144H0.625V3.2655H7.6875V5.83119C6.35266 5.98651 5.31316 7.1241 5.31316 8.49995C5.31316 9.87579 6.35262 11.0134 7.6875 11.1687V13.7344H0.625V11.3085ZM8.3125 13.7344V11.1687C9.64734 11.0134 10.6868 9.87579 10.6868 8.49995C10.6868 7.1241 9.64734 5.98651 8.3125 5.83119V3.2655H15.375V5.69144H13.2028C13.0302 5.69144 12.8903 5.83138 12.8903 6.00394V10.996C12.8903 11.1685 13.0302 11.3085 13.2028 11.3085H15.375V13.7344H8.3125ZM15.375 10.6835H13.5153V6.31645H15.375V10.6835Z" fill="#0D0033"/>
                                                </svg>
                                                <p>Kickoff: <span class="important">{{ match.start_time }}</span></p>
                                                <p> | </p>
                                                <p>{{ match.stadium_name }},{{ match.stadium_city }}</p>
                                                <img class="flag_img" src="../assets/images/united-kingdom.png">
                                            </div>
                                            <p>Tickets from: <span class="important">£58.00</span></p>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <v-pagination class="pagination mb-2" v-model="filter_results.current_page" :length="filter_results.total" @input="filter_results.current_page"></v-pagination>

                    </div>
                </div>
            </div>    
        </div>
    </main>
</template>

<script>

export default {
  name: 'MatchesPage',
  data: () => ({
        tab: null,
        filter_datas: [],
        filter_results:[],
        stadium_results:[],
        date1: {
        start: {
          menu: false,
          value: null,
        },
        end: {
          allowedDates: [],
          menu: false,
          value: null,
        },
      },
    }),

    async mounted() {

      this.filter_datas =  await this.$store.dispatch("fetchFilter");

      this.filter_results =  await this.$store.dispatch("fetchFilterResults");
  },

  methods: {
    date1EndAllowedDates(value) {
      return this.date1.end.allowedDates.includes(value);
    },
  },
};

</script>
