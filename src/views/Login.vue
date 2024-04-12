<template>
  <div class="login-container">
    <div class="container">
      <div
        class="left_box"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0 }"
        :delay="200"
      >
        <img src="../assets/imgs/login_banner.jpg" alt="" />
      </div>
      <div class="right_box">
        <h3
          class="title"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          :delay="200"
        >
          登录
        </h3>
        <div class="form-container">
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginRules"
            label-width="120px"
            class="demo-ruleForm"
            size="large"
            status-icon
          >
            <el-form-item
              label=""
              prop="username"
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
            >
              <el-input v-model="loginForm.username" placeholder="请输入用户名">
                <template #prefix>
                  <el-icon><Avatar /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item
              label=""
              prop="password"
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
            >
              <el-input
                type="password"
                show-password
                placeholder="请输入密码"
                v-model="loginForm.password"
              >
                <template #prefix>
                  <el-icon><Lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-form>

          <!-- 滑块验证码 -->
          <div
            style="width: 100%"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          >
            <mi-captcha
              ref="captcha"
              width="100%"
              :height="38"
              :radius="6"
              bgColor="#fff"
              textColor="#000"
              borderColor="#dcdfe6"
              :logo="logo"
              @success="captchaSuccess"
            />
          </div>
          <!-- 提交表单 -->
          <div
            style="margin-top: 20px; width: 100%"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
          >
            <el-button
              style="height: 38px"
              type="primary"
              @click="handleLogin"
              :loading="btnLoading"
            >
              登录
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

import useMessage from "@/hooks/useMessage.js";
const ElMessage = useMessage();

const loginFormRef = ref(null);

const logo = new URL("../assets/logo.png", import.meta.url);

//登陆表单的数据
const loginForm = reactive({
  username: "",
  password: "",
  captchaSuccess: false,
});

//表单验证
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const captcha = ref(null);
//滑块验证码通过验证
const captchaSuccess = () => {
  loginForm.captchaSuccess = true;
};
//登陆加载
const btnLoading = ref(false);

//登录
const handleLogin = async () => {
  if (!loginForm.captchaSuccess) {
    ElMessage({
      showClose: true,
      message: "滑动验证码未通过",
      type: "error",
    });
  } else {
    await loginFormRef.value.validate(async (valid) => {
      if (valid) {
        btnLoading.value = true;
        //登录action
        try {
          await store.dispatch("userStore/loginAction", loginForm);
          router.push("/");
          ElMessage({
            showClose: true,
            message: "登陆成功",
            type: "success",
          });
        } catch (error) {
          console.log(error);
        } finally {
          btnLoading.value = false;
        }
      } else {
        ElMessage({
          showClose: true,
          message: "表单验证未通过",
          type: "error",
        });
        // console.log("error submit!", fields);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";

.login-container {
  height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .container {
    /* @include bg_color(); */
    background-color: var(--el-bg-color);
    width: 670px;
    height: 400px;
    display: flex;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 5px 20px 2px rgba(255, 255, 255, 0.1);

    .left_box {
      width: 286px;

      img {
        height: 100%;
      }
    }

    .right_box {
      width: 344px;
      padding: 20px;
      position: relative;

      .title {
        font-size: 26px;
        color: #333;
        margin: 20px auto 40px auto;
        text-align: center;
        font-weight: 700;
      }

      .form-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .el-form {
          width: 100%;

          /* vue3中的样式穿透 */
          ::v-deep(.el-form-item__content) {
            margin-left: 0px !important;
          }
        }

        .el-button {
          width: 100%;
        }
      }

      .language {
        width: 38px;
        height: 40px;
        position: absolute;
        right: 0px;
        top: 0px;
      }

      .theme {
        width: 38px;
        height: 40px;
        position: absolute;
        right: 38px;
        top: 0px;
      }
    }
  }
}
</style>
