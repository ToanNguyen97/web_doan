import NavigationDrawer from '@/views/core/Admin/NavigationDrawer.vue'
import popupUser from '@/views/core/Admin/popupEditUser.vue'

export default {
  components: {
    NavigationDrawer,
    popupUser
  },
  data () {
    return {
      user: {},
      openPopUser:false,
      fav: true,
      menu: false,
      hints: true,
      mini: true,
      check: true,
      icon: 'format_list_bulleted',
    }
  },
  created() {
    this.$store.dispatch('auth/getUser').then( res => this.user = res)
  },
  methods: {
    input (data) {
      this.$emit('input', data)
    },
    goToInfo () {
      this.$router.push({name: 'Login'})
    },
    changeMini () {
      this.mini = !this.mini
      if(this.mini == false)
      {
        this.icon = 'format_align_center'
        this.check = false
      }
      else
      {
        this.icon = 'format_list_bulleted'
        this.check = true
      }
    },
    LogOut () {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push({path:'/login'})
      })
    },
    OpenPopupUser () {
      this.openPopUser = true
    }
  }
}