<template>
  <div class="login_page fill">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名">
              <span>dsfsf</span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
        <!-- <p class="tip">温馨提示：</p>
				<p class="tip">未登录过的新用户，自动注册</p>
        <p class="tip">注册过的用户可凭账号密码登录</p> -->
      </section>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "me",
  components: {},
  methods: {
    ...mapActions(["changetopContent"]),
    getData() {
      setTimeout(() => {
        this.changetopContent({
          index: 4,
          title: "Detail",
          content: "this is content"
        });
      }, 100);
    },
    submitForm(formName) {
      console.log(formName);
    }
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        status: "2"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      showLogin: true,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    //   this.getData();
    //   this.changetopContent({"index":4,"title":"Detail","content":"this is content"})
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.login_page {
  background-color: #324057;
  display: flex;
  flex-direction: column;
}
.fill{
  display: flex;
  width: 100%;
  height: 100%;
}
.manage_tip {
  display:flex;
  position: absolute;
  width: 100%;
  left: 0;
  p {
    font-size: 34px;
    color: #333333;
  }
}
.form_contianer {
  display: flex;
  flex-direction: column;
  .wh(320px, 210px);
  .ctp(320px, 210px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
  box-sizing: border-box;
}
.tip {
  font-size: 12px;
  color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
