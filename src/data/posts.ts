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
  coverImage?: string;
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
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
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
  {
    id: "4",
    tags: ["React", "Hooks"],
    categoryId: "default",
    title: "React Hooks 深入理解：useEffect 完全指南",
    date: "2026-04-28",
    cover: "🪝",
    excerpt:
      "useEffect 是 React 中最常用的 Hook 之一，但它的行为常常让人困惑。本文深入剖析 useEffect 的执行时机和最佳实践。",
    sections: [
      {
        heading: "useEffect 的执行时机",
        paragraphs: [
          "useEffect 在每次渲染后执行，但你可以通过依赖数组来控制它的执行频率。空数组意味着只在挂载时执行一次。",
          "理解 React 的渲染流程对于掌握 useEffect 至关重要。每次状态更新都会触发重新渲染，而 effect 在渲染完成后运行。",
        ],
      },
      {
        heading: "清理副作用",
        paragraphs: [
          "许多副作用需要清理，比如定时器、事件监听和订阅。useEffect 的返回函数会在组件卸载前和下一次 effect 执行前调用。",
        ],
      },
    ],
    takeaways: [
      "useEffect 在渲染后执行，依赖数组控制频率",
      "清理函数在卸载和下次执行前调用",
      "避免在 effect 中执行同步的状态更新",
    ],
  },
  {
    id: "5",
    tags: ["TypeScript", "工程化"],
    categoryId: "default",
    title: "TypeScript 工程化最佳实践",
    date: "2026-04-15",
    cover: "⚙️",
    excerpt:
      "如何在团队中统一 TypeScript 配置，提升代码质量和开发效率。",
    sections: [
      {
        heading: "严格模式配置",
        paragraphs: [
          "开启 strict 模式是 TypeScript 项目的第一步。strictNullChecks、noImplicitAny 等选项能在编译期捕获大量潜在问题。",
          "建议从项目初期就开启严格模式，否则后期迁移成本会很高。",
        ],
      },
    ],
    takeaways: [
      "始终开启 strict 模式",
      "使用 tsconfig 继承来统一团队配置",
      "避免使用 any，优先使用 unknown",
    ],
  },
  {
    id: "6",
    tags: ["CSS", "动画"],
    categoryId: "default",
    title: "CSS 动画性能优化指南",
    date: "2026-03-20",
    cover: "✨",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    excerpt:
      "流畅的动画是优秀用户体验的关键。本文介绍如何编写高性能的 CSS 动画。",
    sections: [
      {
        heading: "使用 transform 和 opacity",
        paragraphs: [
          "transform 和 opacity 是仅触发 composite 的属性，不会引起 layout 和 paint，性能最佳。",
          "避免在动画中修改 width、height、margin 等会触发 reflow 的属性。",
        ],
      },
    ],
    takeaways: [
      "优先使用 transform 和 opacity 做动画",
      "使用 will-change 提示浏览器优化",
      "避免在动画中使用 box-shadow 和 filter",
    ],
  },
  {
    id: "7",
    tags: ["Node.js", "后端"],
    categoryId: "default",
    title: "Node.js 流（Stream）处理大文件",
    date: "2026-03-08",
    cover: "📡",
    excerpt:
      "处理大文件时一次性读入内存是不可行的。Node.js 的 Stream API 提供了高效的数据处理方式。",
    sections: [
      {
        heading: "什么是 Stream",
        paragraphs: [
          "Stream 是 Node.js 中处理流式数据的接口。它把大数据分成小块逐步处理，避免内存溢出。",
          "Node.js 中有四种基本的 Stream 类型：Readable、Writable、Duplex 和 Transform。",
        ],
      },
    ],
    takeaways: [
      "大文件用 Stream 分块处理，避免内存溢出",
      "pipe() 方法可以方便地连接多个 Stream",
      "Transform Stream 适合做数据转换",
    ],
  },
  {
    id: "8",
    tags: ["React", "性能"],
    categoryId: "default",
    title: "React 性能优化：memo、useMemo 和 useCallback",
    date: "2026-02-14",
    cover: "🚀",
    excerpt:
      "React 提供了多种性能优化手段，但过度优化反而会增加复杂度。本文教你何时以及如何使用它们。",
    sections: [
      {
        heading: "React.memo 的使用场景",
        paragraphs: [
          "React.memo 通过浅比较 props 来避免不必要的组件重渲染。适合纯展示型组件，且 props 不经常变化的场景。",
        ],
      },
    ],
    takeaways: [
      "memo/useMemo/useCallback 应有针对性地使用",
      "先用 React DevTools Profiler 定位瓶颈",
      "避免在不需要的地方过早优化",
    ],
  },
  {
    id: "9",
    tags: ["Python", "数据"],
    categoryId: "default",
    title: "Python 数据处理利器：Pandas 入门",
    date: "2026-02-01",
    cover: "🐼",
    coverImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop",
    excerpt:
      "Pandas 是 Python 生态中最强大的数据处理库。本文带你快速上手 DataFrame 的常用操作。",
    sections: [
      {
        heading: "DataFrame 基础操作",
        paragraphs: [
          "DataFrame 是 Pandas 的核心数据结构，类似于表格。你可以从 CSV、Excel、SQL 等多种来源创建 DataFrame。",
          "常用的操作包括过滤（query）、聚合（groupby）、连接（merge）和透视（pivot）。",
        ],
      },
    ],
    takeaways: [
      "DataFrame 是 Pandas 最核心的数据结构",
      "read_csv 和 to_csv 是最常用的 I/O 操作",
      "groupby + agg 实现强大的聚合分析",
    ],
  },
  {
    id: "10",
    tags: ["Git", "工具"],
    categoryId: "default",
    title: "Git 工作流：从入门到团队协作",
    date: "2026-01-18",
    cover: "🔧",
    excerpt:
      "Git 是现代软件开发的基石。掌握正确的工作流能大幅提升团队协作效率。",
    sections: [
      {
        heading: "常用工作流对比",
        paragraphs: [
          "Git Flow 适合有明确发布周期的项目，GitHub Flow 适合持续部署的项目，Trunk-Based 适合成熟的 DevOps 团队。",
          "选择工作流时要考虑团队规模、发布频率和协作模式。",
        ],
      },
    ],
    takeaways: [
      "小团队推荐 GitHub Flow，简单高效",
      "大项目用 Git Flow 管理复杂的发布流程",
      "代码审查是 Git 工作流的重要环节",
    ],
  },
  {
    id: "11",
    tags: ["Vue.js", "前端"],
    categoryId: "default",
    title: "Vue 3 Composition API 实战",
    date: "2026-01-05",
    cover: "💚",
    coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
    excerpt:
      "Composition API 是 Vue 3 最重要的特性。它能让你用更灵活的方式组织组件逻辑。",
    sections: [
      {
        heading: "setup 函数与响应式",
        paragraphs: [
          "setup 是 Composition API 的入口。你可以在其中使用 ref、reactive、computed 等响应式 API。",
          "与 Options API 相比，Composition API 更容易提取和复用逻辑。",
        ],
      },
    ],
    takeaways: [
      "setup 是 Composition API 的入口函数",
      "ref 用于基本类型，reactive 用于对象",
      "逻辑复用使用自定义 hook（composables）",
    ],
  },
];
