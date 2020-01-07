<template>
  <div class="commend_body">
      <div class="commend_content" v-for="(value, key) in commends" :key="key">
        <HomeCommendItem :commendData="value" />
      </div>
    <div class="home-bottom">
      © 2019 tianhj.com 版权所有
      <a
        href="http://www.beian.miit.gov.cn/"
        target="_blank"
        class="important_link"
      >豫ICP备19040612号</a>
    </div>
  </div>
</template>
<script>
import HomeCommendItem from "./components/HomeCommendItemView.vue";
export default {
  name: "HomeCommend",
  components: {
    HomeCommendItem,
  },
  data() {
    return {
      commends: [
        {
          title: "Android 操作系统架构开篇",
          content:
            "基于Android 6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇",
          time: "January 31, 2016",
          mark: true
        },
        {
          title: "Flutter 跨平台演进及架构开篇",
          content:
            "基于Flutter 1.5.4或更高版本的源码，专注于分享Flutter引擎、框架、虚拟机等架构与原理解读的原创文章。",
          time: "June 1, 2019",
          mark: true
        },
        {
          title: "Dart虚拟机运行原理",
          content:
            "1.1 引言Dart VM是一种虚拟机，为高级编程语言Dart提供执行环境，但这并意味着Dart在D虚拟机上执行时，总是采用解释执行或者JIT编译。例如还可以使用Dart虚拟机的AOT管道将Dart代码编译为机器代码，然后运行在Dart虚拟机的精简版环境，称之为预编译运行时(precompiled runtime)环境，该环境不包含任何编译器组件，且无法动态加载Da...",
          time: "October 5, 2019",
          mark: true
        },
        {
          title: "Android 操作系统架构开篇",
          content:
            "基于Android 6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇",
          time: "January 31, 2016",
          mark: false
        },
        {
          title: "Flutter 跨平台演进及架构开篇",
          content:
            "基于Flutter 1.5.4或更高版本的源码，专注于分享Flutter引擎、框架、虚拟机等架构与原理解读的原创文章。",
          time: "June 1, 2019",
          mark: false
        },
        {
          title: "Dart虚拟机运行原理",
          content:
            "1.1 引言Dart VM是一种虚拟机，为高级编程语言Dart提供执行环境，但这并意味着Dart在D虚拟机上执行时，总是采用解释执行或者JIT编译。例如还可以使用Dart虚拟机的AOT管道将Dart代码编译为机器代码，然后运行在Dart虚拟机的精简版环境，称之为预编译运行时(precompiled runtime)环境，该环境不包含任何编译器组件，且无法动态加载Da...",
          time: "October 5, 2019",
          mark: false
        },
        {
          title: "Android 操作系统架构开篇",
          content:
            "基于Android 6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇",
          time: "January 31, 2016",
          mark: false
        },
        {
          title: "Flutter 跨平台演进及架构开篇",
          content:
            "基于Flutter 1.5.4或更高版本的源码，专注于分享Flutter引擎、框架、虚拟机等架构与原理解读的原创文章。",
          time: "June 1, 2019",
          mark: false
        },
        {
          title: "Dart虚拟机运行原理",
          content:
            "1.1 引言Dart VM是一种虚拟机，为高级编程语言Dart提供执行环境，但这并意味着Dart在D虚拟机上执行时，总是采用解释执行或者JIT编译。例如还可以使用Dart虚拟机的AOT管道将Dart代码编译为机器代码，然后运行在Dart虚拟机的精简版环境，称之为预编译运行时(precompiled runtime)环境，该环境不包含任何编译器组件，且无法动态加载Da...",
          time: "October 5, 2019",
          mark: false
        }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style lang = "less" scoped>
.commend_body {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: fff;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 60px;

  .home-bottom {
    display: flex;
    position: fixed;
    flex-direction: row;
    height: 40;
    width: 100%;
    bottom: 0;
    padding: 10px;
    color: #000;
    justify-content: center;
    text-align: center;
    background-color: #ffffff;
    box-sizing: border-box;
    font-size: 12px;
    z-index: 999;
    .important_link {
      color: #000;
      text-decoration: none;
    }
    .important_link:hover {
      color: tomato;
      text-decoration: underline;
    }
  }
}
</style>