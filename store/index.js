import moment from 'moment';

export const state = () => ({
  filters: []
})

export const actions = {
  async fetchFilter( commit ) {
    return this.$axios.$get(process.env.API_URL + "/filter/").then((filters) => {
      return filters['data'];

    }, err => {
      throw err;
    }
    )
  },
  async fetchFilterResults( commit ) {
    return this.$axios.$get(process.env.API_URL + "/filter-results?tournment_id=2").then((filter_results) => {
      return filter_results['data'];

    }, err => {
      throw err;
    }
    )
  },
  async fetchStadium( commit ) {
    return this.$axios.$get(process.env.API_URL + "/get-stadium/").then((stadium_results) => {
      return stadium_results['data'];

    }, err => {
      throw err;
    }
    )
  },
  async fetchNearbyStadium( commit ) {
    return this.$axios.$get(process.env.API_URL + "/get-nearby-stadiums/").then((stadiums) => {
      return stadiums['data'];

    }, err => {
      throw err;
    }
    )
  },
  async fetchNearbyTeams( commit ) {
    return this.$axios.$get(process.env.API_URL + "/get-nearby-teams/").then((teams) => {
      return teams['data'];

    }, err => {
      throw err;
    }
    )
  },

}

export const mutations = {
  setFilter(state, filter) {
    state.filter = filter
  }
}

export const getters = {

}