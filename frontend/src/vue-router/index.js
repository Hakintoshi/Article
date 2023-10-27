import Vue from "vue";
import VueRouter from "vue-router";
import ArialArticles from "@/components/Article/ArealArticles.vue";
import FullArticle from "@/components/Article/FullArticle.vue";
import CreateArticle from "@/components/Article/CreateArticle.vue";
import AnalyticComment from "@/components/Analytic/AnalyticComment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/articles",
    component: ArialArticles,
  },
  {
    name: "create-article",
    path: "/article",
    component: CreateArticle,
  },
  {
    path: "/article/:id",
    component: FullArticle,
  },
  {
    path: "/analytic",
    component: AnalyticComment,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
