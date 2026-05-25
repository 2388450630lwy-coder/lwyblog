export interface PostSection {
  heading: string;
  paragraphs: string[];
}

export interface Category {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  tags: string[];
  categoryId?: string;
  title: string;
  date: string;
  cover: string;
  excerpt: string;
  sections: PostSection[];
  takeaways: string[];
}

export const DEFAULT_CATEGORY_ID = "default";
export const DEFAULT_CATEGORY_NAME = "默认分类";

export const posts: Post[] = [
  {
    id: "1",
    tags: ["React"],
    categoryId: "default",
    title: "使用 React 19 构建现代 Web 应用",
    date: "2026-05-20",
    cover: "🌸",
    excerpt:
      "React 19 带来了许多令人兴奋的新特性，包括 Server Components、Actions 和改进的 Hooks。本文将带你了解这些新特性。",
    sections: [
      {
        heading: "React 19 的新特性",
        paragraphs: [
          "React 19 是一个重要的版本更新，它引入了许多开发者期待已久的功能。最引人注目的是 Server Components 的正式支持，这使得我们可以在服务器端渲染组件，从而减少客户端的 JavaScript 体积。",
          "另一个重要的新特性是 Actions，它简化了表单处理和数据提交的流程。通过 useActionState 和 useFormStatus 等新的 Hooks，开发者可以用更少的代码处理复杂的表单逻辑。",
        ],
      },
      {
        heading: "迁移指南",
        paragraphs: [
          "从 React 18 迁移到 React 19 相对平滑。大多数现有的 API 仍然可以正常工作，但有一些 breaking changes 需要注意。建议在迁移前仔细阅读官方的迁移指南。",
          "首先更新你的依赖，然后逐步启用新的特性。特别要注意的是，某些第三方库可能需要更新才能完全兼容 React 19。",
        ],
      },
      {
        heading: "实践建议",
        paragraphs: [
          "在实际项目中，建议先从新项目开始使用 React 19，积累经验后再考虑迁移现有项目。对于大型项目，可以考虑逐步迁移的策略。",
        ],
      },
    ],
    takeaways: [
      "React 19 引入 Server Components 和 Actions",
      "迁移过程相对平滑，但需注意 breaking changes",
      "建议新项目优先使用，老项目逐步迁移",
    ],
  },
  {
    id: "2",
    tags: ["TypeScript"],
    categoryId: "default",
    title: "TypeScript 高级类型技巧",
    date: "2026-05-15",
    cover: "🍃",
    excerpt:
      "掌握 TypeScript 的高级类型可以让你写出更安全、更优雅的代码。本文分享一些实用的类型技巧。",
    sections: [
      {
        heading: "条件类型",
        paragraphs: [
          "条件类型是 TypeScript 中最强大的类型工具之一。它允许你根据类型关系来创建新的类型，类似于 JavaScript 中的三元表达式。",
          "通过 extends 关键字，你可以检查一个类型是否可以赋值给另一个类型，然后根据结果返回不同的类型。",
        ],
      },
      {
        heading: "模板字面量类型",
        paragraphs: [
          "TypeScript 4.1 引入的模板字面量类型让你可以在类型层面操作字符串。结合联合类型，你可以创建强大的字符串模式匹配。",
        ],
      },
    ],
    takeaways: [
      "条件类型是 TypeScript 最强大的类型工具",
      "模板字面量类型可用于字符串模式匹配",
      "合理使用高级类型可以大大减少运行时错误",
    ],
  },
  {
    id: "3",
    tags: ["CSS"],
    categoryId: "default",
    title: "现代 CSS 布局完全指南",
    date: "2026-05-10",
    cover: "🌺",
    excerpt:
      "Flexbox 和 Grid 已经成为了前端布局的标准工具。本文全面介绍它们的用法和最佳实践。",
    sections: [
      {
        heading: "Flexbox 布局",
        paragraphs: [
          "Flexbox 是一维布局模型，非常适合处理行或列中的元素排列。它的核心概念是弹性容器和弹性项目，通过主轴和交叉轴来控制对齐方式。",
          "常用的 Flexbox 属性包括 justify-content、align-items 和 flex-wrap。理解这些属性的作用可以让你轻松实现各种布局需求。",
        ],
      },
      {
        heading: "Grid 布局",
        paragraphs: [
          "CSS Grid 是二维布局模型，可以同时处理行和列。它比 Flexbox 更适合处理复杂的页面布局。",
          "通过 grid-template-columns 和 grid-template-rows，你可以精确地定义网格结构，实现以前需要大量 hack 才能做到的效果。",
        ],
      },
    ],
    takeaways: [
      "Flexbox 适合一维布局，Grid 适合二维布局",
      "两者可以结合使用，各取所长",
      "浏览器支持已经非常完善，可以放心使用",
    ],
  },
];
