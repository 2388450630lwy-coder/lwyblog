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
    "id": "wp-1",
    "tags": [
      "Linux"
    ],
    "categoryId": "linux",
    "title": "WordPress博客搭建",
    "date": "2024-04-08",
    "cover": "🐧",
    "excerpt": "一、前言 大多数人都用过一些社交平台的博客，比如童年的QQ空间，然后就是微博.作为一名程序员之前用过CSDN发表过几篇文章，但是懂得都懂，这些平台的博客都不能自己去独立设置，所有想自己搭建个人博客，网上有很多开源的博客系统，最终选择了wor...",
    "sections": [
      {
        "heading": "一、前言",
        "paragraphs": [
          "大多数人都用过一些社交平台的博客，比如童年的`QQ空间`，然后就是微博.作为一名程序员之前用过`CSDN`发表过几篇文章，但是懂得都懂，这些平台的博客都不能自己去独立设置，所有想自己搭建个人博客，网上有很多开源的博客系统，最终选择了[wordPess](https://cn.wordpress.org/)博客系统搭建."
        ]
      },
      {
        "heading": "二、准备工作",
        "paragraphs": [
          "搭建博客前期的准备的内容:",
          "-   服务器: 网上的云服务器有许多，如阿里云、腾讯云、华为云等等，个人喜欢阿里云一点，所有就在阿里云买了一个`ecs`的服务器.具体的购买服务器等操作可以去网上搜索一下.\n-   域名和`ICP`备案: 域名现在都比较便宜，几块钱就能租个一年(记得解析域名).但是买完域名后一定要在`ICP`备案（这些都可以在阿里云进行）,如果没有备案的话，配置域名的网页是无法访问的.\n-   开放端口：访问网页是需要开放端口号，博客搭建需要开放80，443,81端口，具体的开放端口在这也不描述啦."
        ]
      },
      {
        "heading": "3.1 拉取镜像",
        "paragraphs": [
          "1.  下载docker:\n    \n    ```shell\n    curl -fsSL https://get.docker.com | bash -s docker \n    ```\n    \n2.  拉取wordpress， mysql, nginxManager镜像\n    \n    ```shell\n    docker pull wordpress\n    docker pull mysql:5.7\n    docker pull jc21/nginx-proxy-manager\n    ```"
        ]
      },
      {
        "heading": "3.2 正式部署",
        "paragraphs": [
          "1.  创建数据库：",
          "```shell\n# 创建内部网络\ndocker network create web\n# 创建数据库容器\n# MYSQL_ROOT_PASSWORD: 为mysql的密码，可以自己定义\ndocker run --name mysql57 --net web -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7 --character-set-server=utf8 --collation-server=utf8_unicode_ci\n# 进入数据库容器\ndocker exec -it mysql57 bash\n# 进入数据库\nmysql -uroot -p \n# 输入刚设置的mysql密码\n123456\n# 创建数据库\ncreate database wp;\n# 为数据库创建用户\ncreate user wp identified by \"123456\";\n# 数据库权限设置\ngrant all on wp.* to wp;\n# 退出数据库\nexit;\n```",
          "2.  搭建wordpress和nginx\\_proxy容器",
          "```shell\n# 在自己的服务器中创建wp文件夹和nginx文件夹用来放相关配置\ncd ~/home\nmkdir wp nginx_proxy\n# 创建wordpress容器\ncd /home/wp\ndocker run -dit --net web -v `pwd`:/var/www/html --name wordpress wordpress\n# 创建nginx_proxy容器\ncd /home/nginx_proxy\ndocker run -dit -p 80:80 -p 81:81 -p 443:443 --net web --name nginx_proxy -v $PWD/data:/data -v $PWD/letsencrypt:/etc/letsencrypt --restart=unless-stopped jc21/nginx-proxy-manager\n```"
        ]
      },
      {
        "heading": "3.3 Nginx_proxy反向代理",
        "paragraphs": [
          "-   打开浏览器输入你的服务器IP:端口 例如 `175.45.46.166:81`\n    \n-   ![](@img/kzvvhi08)\n    \n-   输入默认账号和密码(后续可以改): 账户: `admin@example.com` 密码: `changeme`\n    \n-   点击页面的Proxy Hosts:\n    \n    ![](@img/cp0janxc)\n    \n-   创建反向代理: 点击左上角的`Add Proxy Host`,输入`Domain Name（域名）`,输入`Forward Hostname/IP`填写wordpress，然后保存.\n    \n    ![](@img/03ui6p8o)"
        ]
      },
      {
        "heading": "四、配置wordPress",
        "paragraphs": [
          "前面已经完成了所有的搭建，现在可以输入你的访问站点:`http://` + `域名`进入wordpress网页啦",
          "1.  进入站点，显示下图界面.选择简体中文然后点击继续\n    \n    ![](@img/2b92r0pq)\n    \n2.  点击现在开始: ![](@img/nbdi2vvm)\n    \n3.  填写刚刚设置的相关信息:\n    \n    -   数据库名: wp\n    -   用户名: wp\n    -   密码: 123456\n    -   数据库主机: mysql57\n    -   表前缀: wp\\_ ![](@img/olj510gf)\n4.  然后按照网页默认设置就可以了，最后到如下界面:\n    \n    ![](@img/s3e1xrsc)"
        ]
      },
      {
        "heading": "五、结束（但未完全结束）",
        "paragraphs": [
          "以上就是搭建博客的总过程，如果没有问题的话，你就完成了wordpress的全部搭建(废话，哈哈哈哈哈).然后就可以选择一个好的主题去设置你的网页.",
          "完善网页时遇到了一个问题，上传主题文件时，有上传文件设置，需要如下修改",
          "1.  进入wordpress容器: `docker exec -it wp /bin/bash`\n    \n2.  复制默认的 php.ini 配置文件： `cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini`\n    \n3.  修改php.ini配置文件: `vim /usr/local/etc/php/php.ini`\n    \n    -   找到以下三个关键值，并根据你的需求修改它们: `upload_max_filesize`：文件大小限制 `post_max_size`：POST请求大小限制 `memory_limit`：内存占用限制\n        \n    -   ```shell\n        upload_max_filesize = 200M\n        post_max_size = 250M\n        memory_limit = 500M\n        ```\n        \n    -   保存更改并退出容器,如果没有成功则重启wordpress容器 :`docker restart wp`。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-2",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "AssetBundle",
    "date": "2024-04-08",
    "cover": "🎮",
    "excerpt": "AssetBundle File Guid确保了资产在整个Unity工程中唯一,Local确保了Object在资产中唯一.InstanceID能够让Unity快速找到资产中的Object. AssetBundle(资产文件)，AssetBu...",
    "sections": [
      {
        "heading": "AssetBundle",
        "paragraphs": [
          "1.  File Guid确保了资产在整个Unity工程中唯一,Local确保了**Object在资产**中唯一.InstanceID能够让Unity快速找到资产中的Object.\n    \n2.  AssetBundle**(资产文件)**，[AssetBundle文件结构浅析 - Pink-Floyd - 博客园 (cnblogs.com)](https://www.cnblogs.com/pinkfloyd/p/6489979.html)，包含两部分:**包头和数据段**\n    \n    -   **包头**:包含有关AssetBundle的信息，比如标识符、压缩类型、内容清单(?? 与manifest的区别).内容清单是一个以**ObjectsName**为键的查找表，表中的每个数据都提供一个字节索引用来查找**对应的Object（并非Asset）**在**数据段**中的位置(**平衡搜索树**和**红黑树算法**查找).\n        \n    -   数据段包含通过**序列化AssetBundle中的Assets而生成的原始数据**\n        \n3.  AssetBundle的压缩方式：\n    \n    -   LZMA格式: 压缩的AssetBundle体积最小(高压缩比)，会对**所有序列化Assets后的完整字节数组**进行压缩,但是相对的会**增加解压的时间**.\n        \n    -   LZ4格式：压缩的AssetBundle体积较大，会**单独压缩单独**的Assets的字节.\n        \n    -   不压缩：体积最大，但访问的速度最快，数据段将保持为原始字节流.\n        \n4.  加载AssetBundle的四个API\n    \n    1.  AssetBundle.LoadFromMemory(Async optional)\n        \n    2.  AssetBundle.LoadFromFile(Async optional)\n        \n    3.  UnityWebRequest's DownloadHandlerAssetBundle\n        \n    4.  WWW.LoadFromCacheOrDownload (on Unity 5.6 or older)\n        \n    5.  [Unity手游实战：从0开始SLG——资源管理系统-基础篇（三）AssetBundle原理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/97551363)"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-3",
    "tags": [
      "Linux"
    ],
    "categoryId": "linux",
    "title": "初识Linux",
    "date": "2024-04-09",
    "cover": "🐧",
    "excerpt": "一、Linux是什么 Linux 全称GNU/Linux,是一种免费使用和自由传播的类UNIX操作系统，主要是一个基于POSIX的多用户、支持多线程和多CPU的操作系统，支持32位和64位硬件，能运行主要的Unix工具软件、应用程序和网络协...",
    "sections": [
      {
        "heading": "一、Linux是什么",
        "paragraphs": [
          "[Linux](https://baike.baidu.com/item/Linux?fromModule=lemma_search-box) 全称GNU/Linux,是一种免费使用和自由传播的**类UNIX**操作系统，主要是一个基于**POSIX**的**多用户**、支持**多线程**和**多CPU**的操作系统，支持32位和64位硬件，能运行主要的**Unix**工具软件、应用程序和**网络协议** . Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的**多用户网络操作系统**"
        ]
      },
      {
        "heading": "1.1 Linux的特点",
        "paragraphs": [
          "Linux不仅系统性能稳定，而且是**开源软件** .其核心防火墙组件性能高效、配置简单，保证系统的安全，Linux不仅仅被公司当作**服务器**使用，甚至当作**防火墙** ."
        ]
      },
      {
        "heading": "2.1 基本思想",
        "paragraphs": [
          "基本思想有两点：",
          "1.  一切都是**文件** (系统中的所有都归结为一个文件，包括**命令**、**硬件**、**软件设备**、**操作系统**、**进程**等等对于操作新系统内核而言，都视为拥有各组特性或类型的**文件**)\n2.  每个**文件**都有确定的用途."
        ]
      },
      {
        "heading": "2.2 多用户、多任务",
        "paragraphs": [
          "Linux支持多用户，**各个用户**对于自己的**文件设备**有自己的特殊的权力，保证了各用户之间互不影响，**多任务**则是现代电脑主要的一个特点，Linux可以使**多个程序同时并独立**地运行."
        ]
      },
      {
        "heading": "2.3 支持多种平台",
        "paragraphs": [
          "Linux可以运行在多种硬件平台上，如具有**x86**、**680x0**等处理器的平台.此外Linux是一种[嵌入式系统](https://baike.baidu.com/item/%E5%B5%8C%E5%85%A5%E5%BC%8F%E7%B3%BB%E7%BB%9F/186978)，可以运行在PC、游戏机或者机顶盒上.同时Linux也支持**多处理器技术**。多个处理器同时工作，使性能大大提高."
        ]
      },
      {
        "heading": "三、系统优势",
        "paragraphs": [
          "1.  **代码开源** ：Linux由众多微内核组成，其源代码完全开源；\n2.  **网络功能** ：Linux继承了Unix的特性，具有非常强大的网络功能，其支持所有的**因特网协议**，包括**TCP/IPv4**、**TCP/IPv6**和**数据链路层拓扑程序**等，且可以利用Unix的网络特性开发出新的**协议栈** ；\n3.  **系工具链完整** ：Linux系统工具链完整，简单操作就可以配置出合适的开发环境，可以简化开发过程，减少开发中仿真工具的障碍，使系统具有较强的移植性；\n4.  **开发工具多** ：**容器**、**版本控制器（Git、Svn）**、**文本编辑器（Linux的**[Vi](https://baike.baidu.com/item/Vi/5043202?fromModule=search-result_lemma-recommend)**、 emacs、gedit、DOS等下的edit)**、**集成开发环境(即IDE)**",
          "以上简述了Linux的基本概念，其中未涉及到的后续会慢慢补充的."
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-4",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "Unity的文件与资产",
    "date": "2024-04-09",
    "cover": "🎮",
    "excerpt": "一、Unity的文件夹 当我们创建一个项目时，有几个默认的文件夹也会随之创建，而且这些文件夹都在Unity中有着不可或缺的作用，以下就是刚创建的4个目录(Asset、Library、Package、ProjectSettings): 1.1...",
    "sections": [
      {
        "heading": "一、Unity的文件夹",
        "paragraphs": [
          "当我们创建一个项目时，有几个默认的文件夹也会随之创建，而且这些文件夹都在Unity中有着不可或缺的作用，以下就是刚创建的4个目录(Asset、Library、Package、ProjectSettings):",
          "![](D:\\svn\\Typora\\Unity\\Image\\ee87560f-8c6d-4b64-b121-b9622ce9233d.png)"
        ]
      },
      {
        "heading": "1.1 Assets",
        "paragraphs": [
          "1.  **Assets的作用:** 存放资源的根目录，也是打开Unity工程最一个目录，他的作用是给开发者用来组织管理游戏所需要的各种资源，例如脚本、模型、材质，贴图、音频、脚本等.\n2.  **Assets的资源产生方式:**\n    -   第三方工具生成的资源：这些资源通常由第三方工具(Maya、3ds Max、Ps等)生成，然后导入到Unity中 使用，例如：FBX、纹理、声音等\n    -   Unity自己生成的资源: 例如Prefabs、Scenes、Animator文件等\n3.  **Assets的资源管理:** Unity编辑器中的Asset文件夹中提供了许多的API，用于管理和操作项目中的资源.以下是常见的Assets文件操作的API：\n    -   **AssetDataBase.CreateAsset**: 在指定路径下创建新资源\n    -   **AssetDataBase.GetDependencies**: 获取给定路径下资源的所有依赖项\n    -   **AssetDatabase.SaveAssets**：将所有未保存的资源更改写入磁盘\n    -   **AssetDatabase.Refresh** :导入所有更改的资源。这将确保资源数据库中的信息与磁盘上的实际文件同步.\n    -   **AssetDatabase**是Unity编辑器中用于访问资源并执行操作的重要接口，可以使用这些API来管理项目中的资源，包括创建、删除、导入、移动和保存资源等. AssetDatabase的API: [Unity官方AssetDatabase的API](https://docs.unity.cn/cn/2022.3/ScriptReference/AssetDatabase.html)"
        ]
      },
      {
        "heading": "1.2 Library",
        "paragraphs": [
          "1.  **Library的作用**: 主要用于存储Unity项目的内部数据和资源.\n    \n    -   它包含了Unity编辑器需要的所有内部数据，以及会将Assets的资源导入成Unity可识别的格式，如PS的.psd文件可以转换为在移动设备和PC显卡上渲染的纹理.\n    -   它类似一个缓存的文件夹，当删除Assets的图片和资源音频时，并不会自动删除，而是保留在Library文件夹中.\n2.  **Library的常见文件夹**:\n    \n    -   PackageCache: 用于缓存项目中的Package文件中的数据\n    -   ScriptAssemblies: DLL文件，将Assets的代码编译为DLL文件储存\n    -   ShaderCache：该文件夹用于存储已编译的着色器程序\n    \n    ![](D:\\svn\\Typora\\Unity\\Image\\c82d25e8-4d5a-4823-a5b9-e68cac88c767.png)"
        ]
      },
      {
        "heading": "1.3 Packages",
        "paragraphs": [
          "-   **Packages的作用:** Package包配置信息，Unity会根据配置生成相应的数据，它用于放置一些官方组件和第三方插件.\n-   **Package的重要文件:**\n    -   manifest.json: 描述了项目中所用到的所有包及其版本信息的文件\n    -   packages-lock.json: 锁定文件，用于记录项目中所有包的确切信息，以确保在不同的环境或团队成员间的一致性."
        ]
      },
      {
        "heading": "1.4 ProjectSettings",
        "paragraphs": [
          "**ProjectSettings的作用:** 当前Unity工程下的各项设置参数记录.",
          "| 文件名称 | 中文对照 |\n| --- | --- |\n| AudioManager | 音频管理器 |\n| TimeManager | 事件管理器 |\n| GraphicsSettings | 图像设置 |\n| InputManager | 输入管理器 |\n| EditorSettings | 编辑器设置 |\n| ProjectSettings | 项目设置 |\n| QualitySettings | 特性设置 |\n| UserSettings | 用户的构建设置 |"
        ]
      },
      {
        "heading": "1.5 特殊文件夹:",
        "paragraphs": [
          "-   **Editor:** 用于存放编辑器脚本的文件夹，这些编辑器脚本用于扩展Unity编辑器，可以用来创建自定义的Inspector面板，编辑器窗口等，这些脚本在**游戏构建**时不会被打包成DLL放到游戏项目工程中.\n-   **Resources**：存在资源的特殊文件夹.所有资源可以用Unity的API([Resources的API](https://docs.unity.cn/cn/2022.3/ScriptReference/Resources.html))查找和访问.构建游戏项目时，会将整个文件的资源添加到项目中，Resources中全部资源会被打包成一个缺省的**AssetBundle（resources.assets）** .\n-   **Plugins:** 这个文件夹用于扩展 Unity 的功能。 通常存放DLL文件、C++文件、C文件等。它们可以访问第三方代码库、系统调用和SDK等。\n-   **StreamingAssets:** 用于存放资源，该文件夹在打包的时候资源不会被压缩或加密，会原封不动的复制到项目的特定文件夹中，一般用来存放AssetBundle资源以及一些音效、网络等配置."
        ]
      },
      {
        "heading": "2.1 什么是Unity资产",
        "paragraphs": [
          "Assets文件中的资源就是资产，资源文件一般分为两种类型，一种是Unity原生支持的格式,例如Prefabs、材质球、Scene等。另一种则是需要Unity在导入的时候处理过才能支持的文件，如FBX、纹理、mp3等. Unity在导入资源时有各种**导入器**（Importer）.所有的资源都会放在Assets文件夹下，然后经过Unity处理后会缓存在Libaray文件夹下.",
          "![](D:\\svn\\Typora\\Unity\\Image\\ee87560f-8c6d-4b64-b121-b9622ce9233d.png)"
        ]
      },
      {
        "heading": "2.2 Asset和Objects",
        "paragraphs": [
          "-   Asset: Unity的资源，也可以指**Projects窗口**中所看到的**单个文件或文件夹**.\n    \n-   Object: UnityEngine.Object继承的对象，其实是一个可以**序列化**的数据，用来描述特定的**资源实例**，它也可以代表所有Unity引擎所支持的类型，如Mesh,Sprite,AudioClip（class类）等.\n    \n-   **Asset和Objects的区别:** Asset和Objects是一种**一对多的关系**，例如一个Prefab**(Asset)** 里面包含许多Text、Button、GameObject、Image**(Object)**等."
        ]
      },
      {
        "heading": "2.3 File GUIDS、Local IDS、InstanceID",
        "paragraphs": [
          "-   **Meta文件:** 每次创建或者导入一个资源时，Unity会同时创建**同名的Meta文件**，而这个Meta文件就是Unity用来**资源管理**的重要文件之一. 它的本质是文本文档，它采用的是**YAML格式**来写的.Unity的**序列化文件(.asset、.meta和.prefab)**都是用这个格式类写的，如Prefab、场景等等.\n-   FileGUIDS**(简称GUID)**: Guid是Meta中最最最重要的数据.Guid就表示这个文件(.meta)，也就是同名资源的**唯一ID**.通过Guid就可以找到工程中的**资源文件**，在编辑器中经常使用**AssetDatabase.GUIDToAssetPath**和**AssetDatabase.AssetPathToGUID**进行互转.\n-   **LocalIDS**(又称fileID)：GUID对应一个文件，一个文件中可能会包含多个文件，这个时候就需要另外一个ID来表示，这就是**FileID**.FileID的储存方式有2种:\n    \n    -   非序列化文件(如FBX文件): FileID直接存储在meta文件中.\n        \n    -   序列化文件**(.prefab、.asset)**:FileID存储在自身数据中.\n        \n-   **InstanceID**: GUID和fileID能够使Unity在编辑器模式下快速完成Unity的资源管理，但是在运行时，则会存在比较大的性能问题，运行时需要一个表示更好的系统，于是Unity就弄了一套缓存系统**（PersistentManager）**,将GUID和fileID转换为一个**简单且唯一**的整数.从**文件加载**的对象将被分配一个正数的**InstanceID**，新创建的对象将具有负数的**InstanceID**，即使稍后将对象保存到文件中，其负值也会保持不变。",
          "| 字段 | 图片 |\n| --- | --- |\n| GUID | ![](D:\\svn\\Typora\\Unity\\Image\\20240319234428.png) |\n| LocalID | ![](D:\\svn\\Typora\\Unity\\Image\\20240319234630.png) |\n| InstanceID | ![](D:\\svn\\Typora\\Unity\\Image\\20240319234834.png) |"
        ]
      },
      {
        "heading": "3.1 Object加载",
        "paragraphs": [
          "-   当Unity的**应用程序**启动时，PersistentManager的缓存系统会对项目立刻要用到的数据(比如启动场景里的Object和依赖项)以及Resource目录下的Object进行初始化.如果在**运行时**导入了Asset或从**AssetBundles**加载了Object都会参数新的InstanceID.\n    \n-   Object会自动加载的情况:\n    \n    -   某个Object的InstanceID被间接的引用了.\n    -   Object当前没有加载到内存中\n    -   可以定位到Object的源位置（File GUID和LoaclID）\n-   资源加载错误: 如果File GUID和LocalID没有InstanceID, 或者有InstanceID，但是对应的Object已经被卸载了,并且Instance ID引用了无效的FileGUID和LocalID,那么这个Objects的引用会被保留，但是实际**Objects**不会被加载。在Unity的编辑器里会显示为：**“(Missing)”**引用，而在运行时，根据Objects类型不一样，有可能会是空指针，有可能会丢失网格或者纹理贴图导致场景或者物体显示粉红色."
        ]
      },
      {
        "heading": "3.2 Object卸载",
        "paragraphs": [
          "```c#\n// TODO: AssetBundle和Resource的卸载\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-5",
    "tags": [
      "Linux"
    ],
    "categoryId": "linux",
    "title": "Linux的文件命令",
    "date": "2024-04-09",
    "cover": "🐧",
    "excerpt": "一、文件的基本属性 Linux系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限，为了保护系统的安全性，Linux系统对不同的用户访问同一文件的权限有着不同的规定. 每个文件都由10个字符来确定 第0位确定文件的类型，一共...",
    "sections": [
      {
        "heading": "一、文件的基本属性",
        "paragraphs": [
          "Linux系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限，为了保护系统的安全性，Linux系统对不同的用户访问**同一文件的权限**有着不同的规定. 每个文件都由10个字符来确定 第0位确定文件的类型，一共有5个字符",
          "![请添加图片描述](@img/x8wa1ib0)",
          "![请添加图片描述](@img/9yuofh10)",
          "![请添加图片描述](@img/j6uuh07y)",
          "-   d 表示**目录**，- 表示**文件**，l 表示**链接文档**，bc不常用 读写执行分别为rwx，如果没有权限则为 -"
        ]
      },
      {
        "heading": "1.1 Linux的文件属主和属组",
        "paragraphs": [
          "**属主**：对于文件来说，都有一个特定的所有者，也就是对该文件所具有的所有权的用户 **属组**：用户是按组分类的，一个用户可以属于一个或多个组，**属主**以外的用户可以分为同组用户，即有属组权限，还可以分为其他用户，只能由其他用户权限."
        ]
      },
      {
        "heading": "1.2 更改文件属性",
        "paragraphs": [
          "-   **charp**: 更改文件属组. **语法:** charp \\[-R\\] 属组名 文件名 -R:表示递归\n-   **chown**: 更改文件属主，同时也可以更改文件属组 **语法:** chown \\[-R\\] 属主名 文件名 或者 chown \\[-R\\] 属主名：属组名 文件名\n-   **chmod**: 更改文件9个属性即rwxrwxrwx 每个权限字符都有各自的分数 r：4 w： 2 x： 1 **语法**：\n    1.  chmod \\[-R\\] xyz ：文件名或者文件夹名 “xyz”分别表示不同权限的值.\n    2.  chmod +x filename：将文件改为可执行文件\n    3.  [chmod文件命令](https://www.runoob.com/linux/linux-comm-chmod.html)"
        ]
      },
      {
        "heading": "二、Linux的文件与目录管理",
        "paragraphs": [
          "Linux的目录结构为**树状结构（类似Windows中我的电脑）**，最顶级的的目录为**根目录“/”** ."
        ]
      },
      {
        "heading": "2.1 绝对路径与相对路径",
        "paragraphs": [
          "-   **绝对路径**：路径的写法由根目录_/_写起，例如/user/share/doc这个目录.\n-   **相对路径**：路径的写法不是由_/_写起，而是以当前路径写起，例如由/user/share/doc这个目录到/user/share/man底下时，可以直接写成 **cd ../man ,\" .. \":表示上一目录** ."
        ]
      },
      {
        "heading": "2.2 处理文件的常用指令",
        "paragraphs": [
          "path : 文件路径 dirname: 文件夹名 filename :文件名 文件：蓝色是文件夹，白色是普通文件，绿色为可执行文件",
          "-   **ls** (list files) ：列出文件及文件名 **写法**：ls path **（path 可加可不加）** 例： ls ：列出**当前文件**的文件名 ls /user/share: 列出**share文件**的文件名\n-   **cd** (change directory) ：切换文件夹 **写法**： cd path\n-   **pwd** (print work directory) ：显示当前的文件夹\n-   **mkdir** (make directory)：创建一个新的文件夹 **写法** ：mkdir dirname\n-   **rmdir** (remove directory)：删除一个空的文件夹 **写法**: rmdir dirname\n-   **cp** （copy file）：复制文件或者文件夹 **写法**：cp filesname 或者 cp dirname\n-   **rm** (remove) ：删除文件或文件夹 **写法**： remove filename remove dirname\n-   **mv** (move file) ：移动文件或者目录，或者重命名文件夹和目录 **写法**：mv filenameA filenameB\n-   **Ctrl + c**： 取消命令，并且换行\n-   **Ctrl + u**：清空本行命令\n-   **tab键**：可以补全命令和文件名，没有补全可以点击两下，显示备选选项.\n-   **touch**：创建一个文件 **写法**：touch filename\n-   **cat**: 展示文件中的内容 **写法**：cat filename\n-   **./**：执行可执行文件 **写法**：./**相对路径或者** ./**绝对路径**\n-   **bash**: 执行shell文件 **写法**：bash filename."
        ]
      },
      {
        "heading": "2.3 文本的复制与粘贴",
        "paragraphs": [
          "-   选中文本：按住shift选中\n-   复制文本：Ctrl + insert\n-   粘贴文本：Shift + insert"
        ]
      },
      {
        "heading": "2.4 文件选项与参数",
        "paragraphs": [
          "-   **ls** ：\n    \n    -   \\-a：全部的文件，包含**隐藏文件(以.开头的文件)** 一起列出来.\n    -   \\-d : 仅列出目录本身，而不是列出目录内的文件数据.\n    -   \\-l: **长数据串**列出，包含文件的**属性和权限**等等数据. 也可以直接用**ll**来代**ls -l**\n-   **mkdir**:\n    \n    -   \\-p:直接将所需要的目录（包含上一级目录）递归创建起来 mkdir test1/test2/test3\n    -   \\-m:获取配置文件的权限，不在意默认权限（umask），可以直接创建\n-   **rm**:\n    \n    -   \\-f:强制删除，不会出现警告信息\n        \n    -   \\-r:递归删除，非常危险的选项!!!\n        \n    -   _:目录下所有文件_\n        \n    -   _/_ :根目录下所有的文件 切忌使用 rm -rf \\*/\n        \n-   **mv**:\n    \n    -   \\-f:强制移动或者覆盖",
          "以上就是相关的**文件属性**以及常用的的**文件指令**."
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-6",
    "tags": [
      "Linux"
    ],
    "categoryId": "linux",
    "title": "Shell语法",
    "date": "2024-04-10",
    "cover": "🐧",
    "excerpt": "一、shell的概论 1.1 概念 shell是用C语言编写的程序，是用户通过命令行和操作系统沟通的语言，shell既是一种命令语言，也是一种程序设计语言.简述来说，shell脚本可以直接在命令行执行，即shell在终端的命令行中逐行执行....",
    "sections": [
      {
        "heading": "1.1 概念",
        "paragraphs": [
          "shell是用C语言编写的程序，是用户通过命令行和操作系统沟通的语言，shell既是一种命令语言，也是一种程序设计语言.简述来说，shell脚本可以直接在命令行执行，即shell在终端的命令行中逐行执行.shell脚本也可以将一套的逻辑放到文件中，直接执行该文件，方便复用."
        ]
      },
      {
        "heading": "1.2 类型",
        "paragraphs": [
          "在Linux中常见的shell脚本有很多种，常见的有",
          "-   Bourme Shell(`user/bin/sh`或者`/bin/sh`)\n-   Bourme Again Shell(`/bin/bash`)\n-   C Shell(`/bin/bash/csh`)\n-   K Shell(`/bin/bash/ksh`)\n-   ...",
          "`shell`编程只要有写代码的文本编辑器和一个能解释执行的脚本解释器就可以了，`shell`脚本在`Linux`可以直接执行，在windows终端中需要`git`去`Git Bash Here`才能执行.[Windows CMD常用命令大全（值得收藏）](https://zhuanlan.zhihu.com/p/468515490) `Linux`系统一般默认使用`bash`，所以以下的都是`bash`中的语法. `shell`文件开头的开头都要加上`!# /bin/bash`，表明`bash`为脚本的解释器（即编译器）"
        ]
      },
      {
        "heading": "1.3 脚本示例",
        "paragraphs": [
          "新建一个test.sh文件，内容如下",
          "```bash\n#! /bin/bash\necho \"Hello world!\"\n```"
        ]
      },
      {
        "heading": "1.4 运行方式",
        "paragraphs": [
          "作为可执行文件",
          "```bash\nacs@1463acb54038:~$ ls\nhomework\nacs@1463acb54038:~$ vim test.sh\nacs@1463acb54038:~$ ls\nhomework  test.sh\nacs@1463acb54038:~$ chmod +x test.sh\nacs@1463acb54038:~$ ls\nhomework  test.sh\nacs@1463acb54038:~$ bash test.sh\nHello World!\n```"
        ]
      },
      {
        "heading": "2.1 Shell变量的种类",
        "paragraphs": [
          "运行shell脚本时，会同时存在三种变量:",
          "-   局部变量：局部变量在脚本或命令中定义，仅在当前的shell实例中有效，其他shell启动的程序不能访问局部变量\n-   环境变量：所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常的运行.\n-   shell变量：shell变量是由shell程序设置的特殊变量，shell变量有一部分是环境变量，有一部分是局部变量.\n-   将局部变量变为环境变量：\n    \n    ```bash\n    acs@1463acb54038:~$ name=lwy\n    acs@1463acb54038:~$ export name\n    acs@1463acb54038:~$ declare -x name\n    acs@1463acb54038:~$ bash\n    acs@1463acb54038:~$ echo ${name}\n    lwy\n    ```"
        ]
      },
      {
        "heading": "2.2 变量的使用",
        "paragraphs": [
          "```bash\n# 变量的定义\nname='lwy' # 单引号定义字符串\nname=\"lwy\" # 双引号定义字符串\nname=lwy # 不加引号也表示字符串\n# 使用变量 在定义过之前加上$,最好是加上{}，用来识别变量的边界\necho ${name} # 输出lwy\necho $name # 输出lwy\necho ${name}hhh # 输出lwyhhh\n# 只读变量和删除变量\nreadonly boy=lwy # 定义只读变量\nboy=zyc # 会报错，只读变量不能修改\nunset name # 删除name变量\necho name # 会输出为空\n```"
        ]
      },
      {
        "heading": "2.3 字符串",
        "paragraphs": [
          "```bash\n# 字符串有三种方式 单引号 双引号 不加引号\nname='lwy'\nname=\"lwy\"\nname=lwy\n# 字符串拼接\necho \"hello, \"${name}\"!\"\necho 'hello,'${name}'!'\necho 'hello,${name}!'\n# 分别输出 hello,lwy/hello,lwy/hello,${name}!\n# 获取字符串长度 #获取长度\nstr=\"qwer\"\necho ${#str}\n# 提取子字符串\necho ${str:0:2}\n# 输出qw\n```"
        ]
      },
      {
        "heading": "3.1 文件参数变量",
        "paragraphs": [
          "当我们在执行Shell脚本时，向脚本传递参数，脚本内获得参数的格式为:$n,n表示第n个参数，$0表示执行的文件名（含文件路径）",
          "```bash\n#! /bin/bash\n# 该文件的文件名为test.sh\nstr=\"传递参数\"\necho \"这个文件名为\"${0}\necho \"who's boy?\"${1}\necho \"who's girl?\"${2}\n```",
          "可以将该脚本设置执行权限，并执行脚本",
          "```bash\nchmod +x test.sh\n./test lwy zyc\n:<<abc\n这是文件的注释，输出的结果如下\n这个文件名为./test.sh\nwho's boy?l wy\nwho's girl?zyc\nabc\n```"
        ]
      },
      {
        "heading": "3.2 其他参数相关变量",
        "paragraphs": [
          "| 参数 | 说明 |\n| --- | --- |\n| $# | 获取参数的个数 |\n| $@ | 输出\" ${1}, ${2}, ${3} \"的值(数组) |\n| $\\* | 输出\" ${1}, ${2}, ${3} \"的值(字符串) |\n| $? | 上一条命令的退出状态，即exitcode,0表示正常退出，其他表示错误 |\n| $(command) | 返回`common`这条命令的stdout（可嵌套） |\n| \\\\`command\\` | 返回这个`command`这条命令的stdout(可嵌套) |\n| $$ | 当前脚本的进程id |"
        ]
      },
      {
        "heading": "4.1 定义和读取数组",
        "paragraphs": [
          "Shell数组中可以放多个不同类型的值，Bash Shell只支持一维数组，初始化时不需要定义大小，数组元素下标 由0开始，Shell数组由括号来表示，元素由==空格==分隔开，语法格式如下 array\\_name=(value1 value2 value3 ... valuen)",
          "```bash\nararry = (a 123 \"lwy\" 'c')\n#可以用下标来定义数组\narray[0]=a\narray[1]=123\n```"
        ]
      },
      {
        "heading": "可以直接下标读取",
        "paragraphs": [
          "```bash\necho ${array[0]} # 输出a\necho ${array[1]} # 输出123\n```"
        ]
      },
      {
        "heading": "4.2 关联数组",
        "paragraphs": [
          "Bash支持关联数组，可以使用任意的字符串、或整数作为下标来访问数组元素 关联数组使用`declare`命令来声明",
          "```bash\ndeclare -A arrayname\ndeclare -A site = ([\"name\"]=\"lwy\" [\"age\"]=18 [\"sex\"]=man)\necho ${site[\"name\"]}\n```",
          "使用@和\\*可以数组的所有元素",
          "```bash\necho \"数组的元素为\"${site[@]}\necho \"数组的元素为\"${site[*]}\n# 数组前加！表示获取数组所有的键值\necho \"数组的元素为\"${!site[*]}\n# 获取数组的长度\necho \"数组的长度为\"${#site[*]}\necho \"数组的长度为\"${#site[@]}\n```",
          "Bash支持关联数组（_也就是哈希表_），可以使用任意的字符串、或者整数作为下标来访问数组元素 关联数组的命令用`declare`命令来声明 declare -A arrayname",
          "```bash\ndeclare -A student\nstudent[\"boy\"]=lwy\nstudent[\"girl\"]=zyc\nstudent[\"one\"]=hhhh\necho ${!student[*]}\necho ${student[*]}\n```"
        ]
      },
      {
        "heading": "五、expr命令",
        "paragraphs": [
          "`expr` 用于求表达式的值，格式为 `expr 表达式`",
          "表达式说明：",
          "-   用空格隔开每一项\n-   用反斜杠转义`\\`\n-   对**包含空格和其他特殊字符的字符串**要用引用括起来\n-   expr 会在`stdout`输出结果.如果为逻辑关系表达式，则结果为真时，`stdout`输出1，否则输出`0`\n-   expr也会有`exit code：`，如果为逻辑关系表达式，则结果为真时，`exit code`为0，否则为1"
        ]
      },
      {
        "heading": "5.1 基本的运算符",
        "paragraphs": [
          "假设变量a为10，变量b为20",
          "-   运算符号:`+ - * / % ()`",
          "| 运算符 | 说明 | 举例 |\n| --- | --- | --- |\n| + | 加法 | \\\\`expr $a + $b\\`结果为30 |\n| \\- | 减法 | \\\\`expr $b - $a\\`结果为10 |\n| \\* | 乘法 | \\\\`expr $a \\ * $b\\`结果为200 |\n| / | 除法 | \\\\`expr $b / $a\\`结果为2 |\n| % | 取余 | \\\\`expr $b % $a\\`结果为0 |\n| () | 改变优先级 | \\\\`expr \\ ($b + $a\\ ) \\ * a \\`结果为300 |"
        ]
      },
      {
        "heading": "5.2 逻辑关系表达式",
        "paragraphs": [
          "-   逻辑符号: `| & < <= = == ! >= >`\n-   假设变量a为10，变量b为20",
          "| 运算符 | 说明 | 举例 |\n| --- | --- | --- |\n| | | 或 | \\\\`expr $a \\ \\| $b\\`结果为10 |\n| & | 与 | \\\\`expr $b \\ & $a\\`结果为20 |\n| \\> | 大于 | \\\\`expr $a \\ $b\\`结果为0 |\n| \\== | 等于 | \\\\`expr $b \\ = \\ = $a\\`结果为0 |\n| ! | 非 | \\\\`expr !a\\`结果为0 |"
        ]
      },
      {
        "heading": "六、read命令",
        "paragraphs": [
          "read命令用于从标准输入中读取单行数据。当读到文件结束符时，exit code为1，否则为0。 参数说明：",
          "-   \\-p ：后面可以接提示信息\n-   \\-t：后面可以跟秒数，定义输入字符等待时间",
          "```bash\nread name\nlwy\necho ${name} # 输出为lwy\nread -p \"what's your name?\" -t 10 name\nlwy\nwhat's your name? lwy\necho ${name}\nlwy\n```"
        ]
      },
      {
        "heading": "7.1显示普通字符",
        "paragraphs": [
          "```bash\necho string\n#例子\necho \"It is a test\" # 字符串\necho It is a test # 可以省略\"\"\necho \"\\\"It is a test\\\"\" # 转义字符  输出“It is a test”\n```"
        ]
      },
      {
        "heading": "7.2显示开启转义",
        "paragraphs": [
          "```bash\necho -e \"Hello\\n\"\necho \"lwy\"\n:<<abc\n输出\nhello",
          "lwy\nabc\necho -e \"hello \\c\"\necho lwy\n#输出 hello lwy\n```"
        ]
      },
      {
        "heading": "7.3 显示结果定向至文件",
        "paragraphs": [
          "```bash\necho \"Hello World\"  out.txt # 将内容以覆盖的方式out.txt中\ncat out.txt # 显示 Hello World\n```"
        ]
      },
      {
        "heading": "7.4显示命令执行的结果",
        "paragraphs": [
          "```bash\necho `date`\n# 输出的结果为：Thu Jun 8 22:33:17 CST 2023\n```"
        ]
      },
      {
        "heading": "八、printf命令",
        "paragraphs": [
          "`printf`命令用于**格式化输出**，类似于C/C++中的printf函数. 默认不会再字符串的末尾添加换行符",
          "```bash\necho \"Hello, lwy\"\n# 输出 Hello lwy\nprintf \"Hello, lwy\\n\"\n# 与上面的运行结果一致\n```",
          "**命令格式**： printf format-string \\[ \\]",
          "-   format-string :为格式控制字符串\n-   arguments: 参数列表",
          "```bash\n#! /bin/bash\nprintf \"%s %s %s\\n\" lwy love zyc\nprintf \"%10d\\n\" 1234\nprintf \"%10.2f\\n\" 123.245616\nprintf \"who're you? %s\\n\" lwy\n```"
        ]
      },
      {
        "heading": "九、Test命令与判断符号[]",
        "paragraphs": [
          "test 与 expr 的不同 ：",
          "-   test表示的是`exitcode`值，`exitcode`为0是表示真，1则表示假\n-   expr表示的是`stdout`值，`stdout`为1表示真，0表示假\n-   test和expr作用：test更多用来检测，expr更多的是求表达值"
        ]
      },
      {
        "heading": "9.1 逻辑运算符 &amp;&amp; 和 ||",
        "paragraphs": [
          "-   && 表示**与**，||表示**或**\n-   `expr1 && expr2`:当`expr1`为假时，直接忽略`expr2`\n-   `expr1 || expr2`:当`expr1`为真时，直接忽略`expr2`"
        ]
      },
      {
        "heading": "9.2 test命令",
        "paragraphs": [
          "可以在命令行中输入`help test`，可以查看`test`命令的用法 `test`命令用于**判断文件类型**，以及对变量做比较"
        ]
      },
      {
        "heading": "9.3.1 整数比较",
        "paragraphs": [
          "**命令格式**:",
          "```bash\ntest &a -gt $b # a是否大于b\n```",
          "例如：",
          "```bash\ntest 1 -lt 2\necho $?\ntest 1 -lt 2 && echo \"true\" || echo \"false\"\n# exitcode的值为0，所以输出为0\n# 1 < 2 输出为true\n```",
          "| 命令 | 表示意义 |\n| --- | --- |\n| \\-eq | 等于 |\n| \\-ne | 不等于 |\n| \\-gt | 大于 |\n| \\-ge | 大于等于 |\n| \\-le | 小于等于 |\n| \\-lt | 小于 |"
        ]
      },
      {
        "heading": "9.3.2 字符串比较",
        "paragraphs": [
          "**命令格式**：",
          "```bash\ntest -z string\n```",
          "| 命令 | 表示意义 |\n| --- | --- |\n| test -z string | 判断string是否为空，如果为空，则返回0 |\n| test -n string | 判断string是否为非空，如果为非空，则返回0 |\n| test string1 == string2 | 判断两个字符串是否相等 |\n| test string != string2 | 判断两个字符串是否不相等 |\n| test string \\\\< string2 | 字符串也可以做比较 |"
        ]
      },
      {
        "heading": "9.4.1 文件类型的判断",
        "paragraphs": [
          "**命令格式**:",
          "```bash\ntest -e filename # 判断文件是否存在\n```",
          "| 命令 | 表示意义 |\n| --- | --- |\n| \\-e | 判断文件是否存在 |\n| \\-f | 判断是否为文件 |\n| \\-d | 判断是否为文件夹 |"
        ]
      },
      {
        "heading": "9.4.2 文件权限的判断",
        "paragraphs": [
          "**命令格式**：",
          "```bash\ntest -x filename # 判断文件是否可执行\n```",
          "| 命令 | 表示意义 |\n| --- | --- |\n| \\-x | 判断文件是否为可执行文件 |\n| \\-r | 判断文件是否为可读文件 |\n| \\-w | 判断文件是否为可写文件 |\n| \\-s | 判断文件是否为空文件 |"
        ]
      },
      {
        "heading": "9.4.3 多重条件的判断",
        "paragraphs": [
          "**命令格式**:",
          "```bash\ntest -r filename -a -x filename #判断是否同时成立\ntest -r filename -a -x filename && echo \"true\" || echo \"false\"\n```",
          "| 命令 | 表示意义 |\n| --- | --- |\n| \\-a | 判断两个条件是否同时成立 |\n| \\-o | 两条件是否至少一个成立 |\n| ! | 取反 test ! -x file 当文件不可执行是返回0(也就是true) |"
        ]
      },
      {
        "heading": "十、判断语句",
        "paragraphs": [
          "判断语句为if..then 或 case ..esac类似于`C/C++`的if-else和switch **condition：**表示的是`exitcode`的值"
        ]
      },
      {
        "heading": "10.1 if ..then",
        "paragraphs": [
          "-   单层if **命令格式：**\n    \n    ```bash\n    if condition\n    then\n    语句1\n    语句2\n    fi\n    ```\n    \n-   单层if-else **命令格式：**\n    \n    ```bash\n    if condition then\n    语句1\n    语句2\n    esle\n    语句3\n    语句4\n    fi\n    ```\n    \n-   多层if-elif-elif-else **命令格式：**\n    \n    ```bash\n    if condition then\n    语句1\n    语句2\n    elif condition then\n    语句3\n    语句4\n    esle\n    语句5\n    语句6\n    fi\n    ```"
        ]
      },
      {
        "heading": "10.2 case ..esac",
        "paragraphs": [
          "**命令格式：**",
          "```bash\n# 类似于C/C++的default\ncase $变量名称 in\n值1)\n    语句1\n    语句2\n    ;;\n 值2)\n    语句3\n    语句4\n    ;;\n*)\n    语句5\n    语句6\n    ;;\nesac\n```",
          "**示例：** a = 4",
          "```bash\ncase $a in\n1)\n    echo \"${a}\" 等于1\n    ;;\n2)\n    echo \"${a}\" 等于2\n    ;;\n3)\n    echo \"${a}\" 等于3\n    ;;\n*)\n    echo 其他\n    ;;\nesac\n# 输出其他\n```"
        ]
      },
      {
        "heading": "十一、循环语句",
        "paragraphs": [
          "循环语句包括",
          "-   for ..in .. do .. done\n-   for .. in $(seq 1 10) do .. done `{1 .. 10}` 或者 `{a .. z}`\n-   for ((...;...;...)) do .. done\n-   while ..do .. done 循环\n-   until.. do ..done 循环\n-   break命令\n-   continue命令"
        ]
      },
      {
        "heading": "11.1  for循环",
        "paragraphs": [
          "-   for ..in .. do .. done **示例** :",
          "```bash\n# 输出a abc 123\nfor i in a abc 123\ndo\n    echo $i\ndone\n# 输出当前文件夹的文件名\nfor i in `ls`\ndo\n    echo $i\ndone\n```",
          "-   for .. in $(seq 1 10) do .. done **示例** :",
          "```bash\nfor i in $(seq 1 10)\ndo\n    printf \"%d \" $i\ndone\n输出 1 2 3 4 5 6 7 8 9 10\n# {1..10}不能有空格\n# 输出1 2 3 4 5 6 7 8 9 10\nfor i in {1..10}\ndo\n    echo $i\ndone\n```",
          "-   for((..;..;..)) do .. done # 类似于C/C++中的for循环, 不需要在意**空格** **示例** :",
          "```bash\n# 输出的结果是 0 1 2 3 4 5 6 7 8 9\nfor ((i = 0; i < 10; i ++))\ndo\n    echo $i\ndone\n```"
        ]
      },
      {
        "heading": "11.2 while和until",
        "paragraphs": [
          "while与until的作用是一样的，但是**判断条件**不同，while是判断为真则运行语句，until是判断为假则运行语句. **命令格式：**：",
          "```bash\n# while的格式\nwhile condition\ndo\n    语句1\n    语句2\ndone\nuntil的格式\nuntil condition\ndo\n    语句1\n    语句2\ndone\n```",
          "**示例**:",
          "```bash\nwhile [ $i -ne 0].\ndo\n    echo $i\n    let \"i -= 1\"\n    echo $i\n    ((i --))\ndone\n```"
        ]
      },
      {
        "heading": "11.3 continue和break",
        "paragraphs": [
          "countinue和break两个语句与`C/C++`基本上类似，不过要注意的点就是break不能跳出case语句. **示例**:：",
          "```bash\n# continue：\n# 输出1 3 5 7 9\nfor ((i = 0; i < 10; i ++))\ndo\n    if [ `expr $i % 2` -eq 0 ]\n    then\n        continue\n     else\n         echo $i\n         fi\ndone",
          "# break：\n# 输出0 1 2 3 4 5\nfor i in {1..10}\ndo\n    case $i in\n        5)\n            break;\n            ;;\n        *)\n            echo $i\n            ;;\n    esac\ndone\n```"
        ]
      },
      {
        "heading": "11.4 死循环处理的方式",
        "paragraphs": [
          "`ctrl + c`即可 或者可以直接关闭进程",
          "-   使用`top`命令查看进程的PID\n-   使用`kill -9 PID`即关闭此进程"
        ]
      },
      {
        "heading": "十二、函数",
        "paragraphs": [
          "shell中的函数类似于`C/C++`中的函数，但`return`的返回值与C/C++不同，返回的是`exit code`，取值为0 - 255，0表示正常结束 如果想获取函数的输出结果，可以通过echo输出到stdout中，然后通过`$(function_name)`来获取stdout的结果. 函数的`return`值可以通过`$?`来获取.",
          "**函数的命令格式**:",
          "```bash\n[function] function_name() { # 前缀的function可以省略，参数可以直接与 $1 $2去获取\n    语句1\n    语句2\n    ...\n}\n```",
          "**示例:**",
          "```bash\n# 输出 res = 0 std = lwy is a boy\nfunc(){\n    local name=\"lwy\" # 局部变量\n    echo $name is a $1\n    return 0 #可以不写，默认返回值为0\n}\nres=$?\nstdout=$(func boy)\necho \"res = $res\"\necho \"stdout = $stdout\"\n```",
          "用函数实现斐波拉契数列 f(n) = f(n - 1) + f(n - 2)",
          "```bash\n# 实现斐波拉契数列 f(n) = f(n - 1) + f(n - 2)\n#! /bin/bash\nfunc(){\n    if [ $1 -eq 1 ]-\n    then\n        echo 0\n        return 0\n    fi  \n    if [ $1 -eq 2 ]-\n    then\n        echo 1\n        return 0\n     fi\n     a=$(func $(expr $1 - 1))\n     b=$(func $(expr $1 - 2))\n     echo $(expr $a + $b) }",
          "echo $(func 10)\n```"
        ]
      },
      {
        "heading": "十二、exit命令",
        "paragraphs": [
          "`exit`命令是用来退出当前**shell进程的**，并返回一个退出状态，使用**$?**可以接受这个退出状态. `exit`和`return`的区别：exit和return都返回的是`exitcode`值，但exit是退出的是整个shell进程，而return只是退出整个函数. **示例:**",
          "```bash\n# 不会输出 没有杀死整个进程.\nwhile read name\ndo\n    echo $name\n    if [ $name == \"lwy\"]\n    then\n        echo \"exit\"\n        exit 2\n    fi\ndone\necho \"没有杀死整个进程\"\n```"
        ]
      },
      {
        "heading": "十三、文件重定向",
        "paragraphs": [
          "每个进程默认打开三个文件描述符",
          "-   `stdin`：标准输入，从命令行读取数据，文件描述符为0\n-   `stdout`：标准输出，从命令行输出数据，文件描述符为1\n-   `stderr`：标准错误输出，向命令行输出数据，文件描述符为2",
          "* * *",
          "**命令表**：",
          "| 命令 | 说明 |\n| --- | --- |\n| command file | 将`stdout`以覆盖的方式重定向到`file`中 |\n| command < file | 将`stdin`以覆盖的方式重定向到`file`中 |\n| command > file | 将`stdout`以追加的方式重定向到`file`中 |\n| command n file | 以文件描述符n并追加的方式重定向到`file`中 |\n| command n> file | 以文件描述符n并覆盖的方式重定向到`file`中 |",
          "**输入输出重定向**:",
          "```bash\necho \"lwy hhh zyc\"  output.txt\nread str < output.txt\n# 输出lwy hhh zyc\necho $str\n```",
          "同时重定向stdin和stdout",
          "```bash\n#! /bin/bash\nread a\nread b\necho $(expr ${a} + ${b})\n3\n4\n# 创建test.sh脚本\n# 再创建input.txt\n./test.sh < input.txt  output.txt\n# 查看内容为7\ncat output.txt\n```"
        ]
      },
      {
        "heading": "十四、引入外部脚本",
        "paragraphs": [
          "类似于`C/C++`的include操作，bash可以引用其他脚本的代码 **命令格式**",
          "```bash\n# .和 filename之间有一个空格\n. filename\n# 或者\nsource filename\n```",
          "**示例：** 创建脚本 `test1.sh`",
          "```bash\n#! /bin/bash\nboy=lwy\ngirl=zyc\n```",
          "然后创建脚本`test2.sh`",
          "```bash\n#! /bin/bash\n# 输出 lwy is a boy zyc is a girl\necho \"${lwy} is a boy\"\necho \"${zyc} is a girl\"\n```"
        ]
      },
      {
        "heading": "总结",
        "paragraphs": [
          "以上就是shell所有的基本内容，其中还有许多没有涉及，如let的使用 top type等一些命令，大家去网上搜一搜就行啦，以上的内容大部分是根据www.acwing.com的yxc老师来写的，所以大家如果能看到最后的话也可以去多多关注yxc老师."
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-7",
    "tags": [
      "Linux"
    ],
    "categoryId": "linux",
    "title": "SSH",
    "date": "2024-04-11",
    "cover": "🐧",
    "excerpt": "一、ssh的简述 安全外壳协议(Secure Shell，简称SSH)是一种在不安全网络上用于安全远程登录和其他安全网络服务的协议. SSH是建立在应用层基础上的安全协议，SSH是较可靠，专业为远程登录会话和其他网络服务提供安全性的协议.利...",
    "sections": [
      {
        "heading": "一、ssh的简述",
        "paragraphs": [
          "安全外壳协议(Secure Shell，简称SSH)是一种在**不安全网络**上用于安全远程登录和其他安全网络服务的协议. SSH是建立在**应用层**基础上的安全协议，SSH是较可靠，专业为**远程登录**会话和其他**网络服务**提供安全性的协议.利用SSH协议可以有效防止远程管理过程中的信息泄露问题."
        ]
      },
      {
        "heading": "2.1 基本",
        "paragraphs": [
          "ssh远程登录服务器的指令为",
          "```bash\nssh user@hostname\n```",
          "`user`:用户名 `hostname`:IP地址或域名 ssh第一次登录时会提示：`Are you sure you want to continue connecting (yes/no/[fingerprint])?` 输入`yes`，回车后就该服务器的信息会记录本地termina中的`~/.ssh/know_hosts`文件中 输入密码后就能进入服务器了. ssh的默认登录端口号为22，想登录某特定窗口：",
          "```bash\nssh user@hostname -p 22\n```"
        ]
      },
      {
        "heading": "2.2 使用别名登录服务器",
        "paragraphs": [
          "1.  在本地创建~/.ssh/config文件\n    \n2.  然后在文件中输入\n    \n    ```bash\n    Host mysever # 别名\n    HostName IP地址或域名\n    User 用户名\n    ```\n    \n3.  再用ssh登录就可以直接\n    \n    ```bash\n    ssh mysever # mysever自定义的别名\n    ```"
        ]
      },
      {
        "heading": "2.3 密钥登录",
        "paragraphs": [
          "1.  在本地创建密钥：`ssh-keygen` 一直回车，执行结束后，本地~/.ssh/目录下会多两个文件\n    \n    -   id\\_rsa：私钥 # **不能透露**\n    -   id\\_rsa.pub : 公钥\n2.  将**公钥**的内容拷贝下来，复制到服务器中的`~/.ssh/authorized_keys`中（一般需要自己创建）\n    \n3.  或者将第二步换成命令，**一键添加**服务器公钥 `ssh-copy-id mysever #服务别名`"
        ]
      },
      {
        "heading": "2.4 本地执行服务器命令",
        "paragraphs": [
          "当服务器过多的时候，可以在本地执行服务器命令，不需要进入服务运行后在退出 **命令格式**：",
          "```bash\nssh user@hostname command\n```",
          "示例",
          "```bash\nssh mysever ls -a # 输出当前服务的文件名称\nssh mysever 'for((i = 0; i < 10; i ++)) do echo $i; done ' # 输出 0 1 2 3 4 5 6 7 8 9 \n```"
        ]
      },
      {
        "heading": "3.1 文件传输",
        "paragraphs": [
          "ssh利用scp指令实现了本地和服务器之间的文件传输. **命令格式**：",
          "```bash\nscp source destionation # 将本地的文件source数据传入到destionation服务器下\n```",
          "**示例**",
          "```bash\n# 注意： mysever: 后面需要加**:**, 将本地的.vimrc和.tmux.config传输到mysever服务器上\nscp ~/.vimrc ~/.tmux.config mysever: \n```"
        ]
      },
      {
        "heading": "3.2 文件夹传输",
        "paragraphs": [
          "**命令格式**：",
          "```bash\nscp -r sourcemysever:destionation # 将本地source数据传入到服务器中destionation 都是绝对路径\nscp -r mysever:source destionation  : # 注意： source后面有一个点.表示根目录 将服务器的source数据传入到本地中\n```",
          "```bash\nscp -r ~tmp mysever:/home/acs_9367/ # 将tmp文件传输到服务器/home/acs_9367文件夹下\nscp -r mysever:/home/acs_9367/temp . # 将服务器的temp文件传输到本地根目录下.\n```"
        ]
      },
      {
        "heading": "四、总结",
        "paragraphs": [
          "这一部分让我们了解怎么用终端去连接一个服务器，并且相互进行传输，当你需要不止一台服务器，服务器的管理和文件传输就会变得越来越重要."
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-8",
    "tags": [
      "Linux"
    ],
    "categoryId": "linux",
    "title": "tmux和vim",
    "date": "2024-04-11",
    "cover": "🐧",
    "excerpt": "前言 由于看的教程为ACWing的Linux基础课，所以用的命令为yxc老师自定义的命令，主要为改动 ctrl + b 改成了 ctrl + a，以及一些常用的指令.如果要更改tmux的快捷键，可以修改Tmux的配置文件 ~/.tmux.c...",
    "sections": [
      {
        "heading": "前言",
        "paragraphs": [
          "由于看的教程为ACWing的Linux基础课，所以用的命令为yxc老师自定义的命令，主要为改动 ctrl + b 改成了 ctrl + a，以及一些常用的指令.如果要更改tmux的快捷键，可以修改Tmux的配置文件 ~/.tmux.conf."
        ]
      },
      {
        "heading": "1.1 概念",
        "paragraphs": [
          "tmux是一个**终端复用器(terminal multiplexer)**，指终端登录远程主机并运行后，在其中可以开启**多个控制台**的**终端复用软件** ."
        ]
      },
      {
        "heading": "1.2 tmux的主要作用",
        "paragraphs": [
          "1.  分屏（将屏幕分为多个）\n2.  允许断开Terminal终端连接后，可以继续运行进程."
        ]
      },
      {
        "heading": "2.1 tmux的单元模块",
        "paragraphs": [
          "tmux可以在**终端端口**同时运行多个**会话**，可以在会话中划分窗口和面板，实现**多任务的管理和切换** .这些会话(session)、窗口(window)、面板(panel)可以理解为tmux的单元.",
          "| 名称 | 作用 |\n| --- | --- |\n| tmux | 输入tmux指令时就开启了一个服务器 |\n| session | 会话，一个服务器可以包含多个对话，也相当于开启一个进程 |\n| window | 窗口，一个会话有多个窗口 |\n| panel | 面板，一个窗口有多个面板 |\n| shell | shell对话框，一个面板对应一个shell对话框 |",
          "**表格对应的相关的图片如下**",
          "![](@img/m9tfi3hd)"
        ]
      },
      {
        "heading": "2.2 tmux相关的指令",
        "paragraphs": [
          "-   tmux ：新建一个session对应一个进程,也随之创建一个window,创建一个panel.\n-   tmux ls：列出所有的终端列表\n-   tmux a：打开刚挂起的session会话进程\n-   ctrl a：组合键.",
          "| 组合键 | 作用 |\n| --- | --- |\n| d | 将当前的session挂起 |\n| % | 将当前panel左右分为两个panel |\n| \" | 将当前panel上下分为两个panel |\n| s | 列出所有的会话，即列出所有的session |\n| w | 列出所有的窗口，即列出所有的window |\n| c | 创建一个新窗口 |\n| z | 将当前窗口全屏 |\n| 方向键 | 切换到其他的窗口 |",
          "-   ctrl d：关闭当前panel，如果当前window的所有panel都关闭，则window也随之关闭，如果当前的session的所有window都关闭，则session也随之关闭."
        ]
      },
      {
        "heading": "3.1 vim的概念",
        "paragraphs": [
          "Linux的vim是由**vi**发展出来的一个强大的**文本编译器**，它有多种**模式**，可以进行高效的文本操作和编程. 使用方式：vim filename,如果已有的该文件，则直接打开，否则就直接创建并打开该文件."
        ]
      },
      {
        "heading": "3.2 vim的三种模式",
        "paragraphs": [
          "基本上vi/vim共分为三种模式，分别是**命令模式(Command mode)**,**输入模式（也称编辑模式Insert mode）**和**底线命令模式（又称末行模式Last in mode）**,三种模式的切换如下图所示：",
          "> ![输入图片说明](@img/p7ikvd40)"
        ]
      },
      {
        "heading": "3.2.1 命令模式",
        "paragraphs": [
          "刚启动vi/vim，便进入了进入了**命令模式**，此模式下点击键盘会被识别为**命令**，而非输入的字符. 以下就是命令模式下常用的几个命令：",
          "| 命令 | 作用 |\n| --- | --- |\n| i | 切换到输入模式，能够对文本进行编辑 |\n| gg | 移动到文件头 |\n| G(shift + g) 或 Home | 移动到文件尾 |\n| ^(shift + 6) 或 End | 移动到行首 |\n| $(shift + 4) | 移动到行尾 |\n| <center n space(空格) | n表示数字，移动到当前行的第几个数字 |\n| v | 选中文本 |\n| d | 删除选中文本 |\n| dd | 删除当前行 |\n| y | 复制选中文本 |\n| yy | 复制当前行 |\n| p | 将复制的数据在光标的下一行/下一个进行粘贴 |\n| u | 撤销上一命令 |\n| 大于号 | 将选择的文本整体向右缩进一次 |\n| 小于号 < | 将选择的文本整体向左缩进一次 |\n| gg=G | 将全文代码格式化 |"
        ]
      },
      {
        "heading": "3.2.2 底线命令模式",
        "paragraphs": [
          "在命令模式下按下 `: / ?`三个字母中的任意一个，就会进入底线命令模式（在界面的最下方），底线命令模式可以输入单个或多个字符.在底线命令模式中，基本的命令有如下几个常用命令（省略了\":\"）",
          "| 命令 | 作用 |\n| --- | --- |\n| :q | 退出vim模式 |\n| :w | 保存文件 |\n| :wq | 保存文件并退出 |\n| :q! | 不保存强制退出 |\n| :wq! | 保存后强制退出 |\n| :set paste! | 设置为粘贴模式，取消代码自动缩进 |\n| :set nopaste | 取消粘贴模式，开启代码自动缩进 |\n| :set no | 显示行号 |\n| :set nonu | 隐藏行号 |\n| :set noh | 关闭查找关键词高亮 |\n| :n | 移动到第n行 |\n| :n1,n2s/word1/word2/g | 将n1行到n2行的word1换成word2 |\n| :n1,$s/word1/word2/g | 将全文的所有word1换成word2 |\n| :n1,$s/word1/word2/gc | 将全文的所有word1换成word2,替换之前需要用户确认 |\n| /word | 当前光标下寻找第一个为word的单词 |\n| ?word | 当前光标上寻找第一个为word的单词 |"
        ]
      },
      {
        "heading": "3.2.3 输入模式",
        "paragraphs": [
          "在命令模式下按下`i, o, a`等字符就进入了输入模式，当进入输入模式时，左下角会有**Insert**字样，表示已经进入了**输入模式**了. 在输入模式中按下**ESC**按键，就会退出输入模式，返回到一般命令模式."
        ]
      },
      {
        "heading": "四、总结",
        "paragraphs": [
          "这些tmux指令就像我们打游戏放技能一样，不必要记住，熟能生巧，如果忘记了就在看一遍游戏手册(指令)就行了"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-9",
    "tags": [
      "Linux"
    ],
    "categoryId": "linux",
    "title": "Git",
    "date": "2024-04-11",
    "cover": "🐧",
    "excerpt": "前言 当进入到公司进行多人合作开发项目的时候，版本控制工具是必不可少的. 版本控制是一种记录一个或若干文件内容变化，是对软件开发过程中各种程序代码、配置文件及说明文档等文件变更的管理，是软件配置管理的核心思想之一. 版本控制工具目前主要的就...",
    "sections": [
      {
        "heading": "前言",
        "paragraphs": [
          "当进入到公司进行多人合作开发项目的时候，版本控制工具是必不可少的. 版本控制是一种记录一个或若干文件内容变化，是对软件开发过程中各种程序代码、配置文件及说明文档等文件变更的管理，是软件配置管理的核心思想之一. 版本控制工具目前主要的就是两个**Svn**和**Git** .两者类似但不完全相同，本篇文章主要讲的是Git."
        ]
      },
      {
        "heading": "一、Git 的概念",
        "paragraphs": [
          "**Git:** 一个开源的分布式版本控制系统，可以有效、高速地处理有小到非常大地项目版本管理.",
          "-   **工作区**：仓库的目录，工作区是独立于各个分支的.\n    \n-   **暂存区**：数据暂时存放的区域，类似于工作区写入版本库前的缓存区，暂存区也是独立于各个分支的.\n    \n-   **版本库**：存放所有提交到本地仓库的代码版本\n    \n-   **版本结构**： 树结构，树中的每个节点代表一个代码版本. **如下图所示**:\n    \n    ![](@img/h98hjo42)"
        ]
      },
      {
        "heading": "2.1 全局命令",
        "paragraphs": [
          "1.  `git config --global user.name xxx` :设置全局用户名，信息记录在~/.gitconfig中\n2.  `git config --global user.email xxx@xxx.com`:设置全局邮箱地址，信息记录在~/.gitconfig中\n3.  以上两个在终端只需要设置一次，要修改也可以`vim ~/.gitconfig`进行修改. ![输入图片说明](@img/nd5x1hfd)\n4.  `git init`:将当前目录配置为git 仓库，创建.git文件，并将信息记录在.git文件夹中.\n5.  **.git文件夹的信息** COMMIT\\_EDITMSG FETCH\\_HEAD HEAD ORIG\\_HEAD config description hooks/ index info/ logs/ objects/ refs/ ![输入图片说明](@img/cxinrm89)"
        ]
      },
      {
        "heading": "2.2 常用命令",
        "paragraphs": [
          "| 命令 | 描述 |\n| --- | --- |\n| git add xxx | 将文件xxx加入到暂存区 |\n| git reset xxx | 将文件从暂存区返回工作区 |\n| git restore xxx / git checkout xxx | 将工作区的修改全部撤销 |\n| git commit -m \"备注信息\" | 将暂存区的内容提交到**当前分支** |\n| git log | 查看当前分支所有的版本 |\n| git reflog | 查看HEAD指针的移动历史 |\n| git remote add origin 远程仓库地址 | 连接到远程仓库 |\n| git remote -v | 查看当前的远程仓库信息 |\n| git push | 将当前分支推送到远程仓库 |\n| git pull/git fetch | 将远程仓库拉取到本地仓库 |\n| git status | 当前仓库的状态 |"
        ]
      },
      {
        "heading": "2.3 查看命令",
        "paragraphs": [
          "| 命令 | 描述 |\n| --- | --- |\n| git log | 查看当前分支的所有版本 |\n| git reflog | 查看`HEAD`指针的移动历史 |\n| git diff xx | 查看xx文件相对于暂存区修改了哪些内容 |\n| git status | 查看当前仓库的状态 |\n| git branch | 查看仓库的分支信息 |\n| git remote -v | 查看当前的远程连接信息 |"
        ]
      },
      {
        "heading": "2.4 撤销命令",
        "paragraphs": [
          "| 命令 | 描述 |\n| --- | --- |\n| git reset xxx | 将xxx文件从暂存区返回到工作区 |\n| git checkout xxx / git restore xxx | 将xxx文件的修改撤销(xxx文件在工作区) |\n| git reset --hard HEAD^ | 将代码库回滚到上一版本 |\n| git reset --hard 版本号 | 回滚到某一特定的版本 |"
        ]
      },
      {
        "heading": "2.5 远程仓库",
        "paragraphs": [
          "| 命令 | 描述 |\n| --- | --- |\n| git remote add origin 远程仓库地址 | 将本地仓库连接到远程仓库 |\n| git remote -v | 查看远程分支的信息 |\n| git remote remove origin | 取消连接远程仓库 |\n| git push | 将当前分支推送到远程仓库 |\n| git push --set-upstream origin master | 将本地的主分支推送到远程仓库的主分支上 |\n| git clone ssh/url | 将远程仓库拉取到当前目录 |\n| git pull/git fetch | 将远程仓库于本地仓库的当前仓库合并 |\n| git push -d origin branch\\_name | 删除远程仓库的分支 |"
        ]
      },
      {
        "heading": "2.6 分支命令",
        "paragraphs": [
          "| 命令 | 描述 |\n| --- | --- |\n| git branch | 查看分支信息 |\n| git branch branch\\_name | 创建新分支 |\n| git checkout branch\\_name | 切换branch\\_name分支 |\n| git merge branch\\_name | 将分支branch\\_name合并到当前分支 |\n| git branch -d branch\\_name | 删除本地分支 |\n| git push -d origin branch\\_name | 删除远程仓库的分支 |\n| git checkout -t origin/branch\\_name | 将远程仓库的分支拉取到本地 |"
        ]
      },
      {
        "heading": "3.1 Git是分布式的，SVN是集中式的",
        "paragraphs": [
          "Git是分布式的，所有Git支持离线工作，可以在本地进行很多操作，SVN是集中式的，必须要联网才能进行正常工作.![输入图片说明](@img/bzfsktc4)"
        ]
      },
      {
        "heading": "3.2 Git复杂概念多，SVN简单易上手",
        "paragraphs": [
          "Git的命令很多，例如add commit status fetch push等命令"
        ]
      },
      {
        "heading": "3.3 Git分支廉价，SVN分支昂贵",
        "paragraphs": [
          "-   分支：使用意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。 Git有本地分支，SVN无本地分支.当你在公司正在写一个任务A时，突然临时接到另一个任务B需要紧急处理，但任务A还没完成，这个时候任务A和任务B要处理同一个代码时，但任务A已经写一部分了，如果用SVN的话只能将这块代码撤销到初始版本才能进行任务B的操作，但用Git的分支就可以直接先从Matser主分支重新创建一个分支去完后任务B，任务B完成后再来完成任务A."
        ]
      },
      {
        "heading": "4.总结",
        "paragraphs": [
          "目前SVN还是很多公司用的，SVN简单易懂，在面对中小项目的时候加上其图形界面，SVN还是挺受欢迎的（目前我呆的公司用的就是SVN），但Git确实根据分支这一步还是比SVN稍占优势.Git和SVN都有各自好处，所有两者都是比较好的版本控制工具."
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-10",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "Unity中的C#底层原理",
    "date": "2024-04-18",
    "cover": "🎮",
    "excerpt": "一、Unity如何运行C# 1.1 Mono和IL2CPP 了解Mono和IL2CPP之前我们先了解一下.NET FrameWork和IL（CIL）,.NET FrameWork是Windows的托管环境，可为其运行的应用提供各种服务，主要...",
    "sections": [
      {
        "heading": "1.1 Mono和IL2CPP",
        "paragraphs": [
          "了解Mono和IL2CPP之前我们先了解一下.NET FrameWork和IL（CIL）,`.NET FrameWork`是Windows的托管环境，可为其运行的应用提供各种服务，主要包括两个组件:`公共语言运行时（CLR）`,它是处理运行应用的执行引擎;`NET FrameWork类库`：它提供开发人员可从其自己的应用中调试的已测试、可重用代码库.",
          "-   **Mono**:基于Unity的一个开源、跨平台的`.NET`框架实现,`C#`脚本先被`Mono`的C#的编辑器转换为中间语言`IL`（公共中间语言`CIL`），然后在Mono虚拟机上运行，这种方式支持跨平台运行，但是需要在目标平台上安装或移植Mono虚拟机\n    \n-   **IL2CPP**:`IL`代码被转换为`C++`源代码，然后编译成目标平台的本地代码，这种方式能够提高了运行效率，并且可以在不支持`JIT`的编译器的平台上运行，如`IOS`和某些游戏主机平台.\n    \n-   **Mono运行流程图：**\n    \n    ![Mono运行流程图](@img/lylijxq1)\n    \n-   **IL2CPP流程图**:\n    \n    ![](@img/1nnykexj)"
        ]
      },
      {
        "heading": "1.2 编译模式",
        "paragraphs": [
          "-   Just-in-time(JIT):即时编译模式，Unity在程序运行时将CIL语言通过Mono虚拟机转译成机器码，然后执行（Mono执行方式）.\n-   Ahead-of-time(AOT):提前编译模式，Unity在程序打包时将IL转换为C++源代码，在编译成目标机器的本地代码并存储在文件中,但程序运行中仍有部分的CIL需要JIT编译.\n-   Full-ahead-of-time(Full-AOT):完全静态编译，程序运行前将所有的源码编译成目标平台的机器码(IL2CPP的执行方式)."
        ]
      },
      {
        "heading": "1.3 为何引进IL2CPP",
        "paragraphs": [
          "​ 早期，C#是微软的，只能在Windows平台上运行，为解决跨平台的问题，引入了Mono,利用Mono的虚拟机运行在各个平台上，而IL2CPP是因为Mono的平台移植有限，运行效率过低等缺陷，从而加入了IL2CPP的机制.",
          "-   **可移植性强**:Mono在各平台完成移植的工作量大，每新增一个平台就要把虚拟机移植一遍.ios平台不支持Mono虚拟机的运行，而IL2CPP可以通过c++直接在对应平台上运行.\n-   **运行效率高**：由于IL2CPP直接打包为C++代码，可以直接由各平台的C++编辑器转化为机器码，省去了在运行时解释执行的步骤，所以运行效率相比Mono提升了40%左右."
        ]
      },
      {
        "heading": "2.1 托管代码和非托管代码",
        "paragraphs": [
          "-   托管代码：托管代码是在运行时环境中执行的代码，虚拟机的JIT编译执行的IL代码，其中对象无须手动释放，而是由GC管理(C#、VB.NET、F#).\n-   非托管代码：C/C++或C#中以**不安全类型**写的代码.虚拟机无法跟踪到这类代码的对象，其直接操作**系统资源和内存**，需要程序员**手动管理内存分配和释放**.",
          "我们一般使用托管代码来编写游戏逻辑，而非托管代码通常用于更底层的架构、第三方库或操作系统接口."
        ]
      },
      {
        "heading": "2.2 GC垃圾回收",
        "paragraphs": [
          "GC的全称是\"Garbage Collection\",也就是垃圾回收，他是一种自动管理**堆内存**的机制，用于管理对象的分配和释放.只对托管代码进行管理.",
          "Unity基于Mono和IL2CPP的GC机制都是**标记/清除(Mark-Sweep)**算法，这个算法遍历内存中的所有对象，找出所有对象的引用关系，把这些正在使用的**引用对象**标记出来，然后**清除**没有标记的对象.但是这个算法会存在**内存碎片化**的问题.",
          "-   **IL2CPP**:C#本身就有GC，但是`C++`没有，所以在需要IL2CPP的runtime库实现这个GC算法."
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-11",
    "tags": [],
    "categoryId": "insight",
    "title": "心得",
    "date": "2024-05-12",
    "cover": "💭",
    "excerpt": "2024-5-12 心情: 有点忐忑，不安 今天是周天，五一调休的一个周末，只休息一天，女朋友回学校了，一个人在上海，今天一天无聊的很，现在21:00准备开始一篇博客。现在在看一个电视叫&quot;我的阿勒泰&quot;.我女朋友推荐的.刚...",
    "sections": [
      {
        "heading": "2024-5-12",
        "paragraphs": [
          "心情: 有点忐忑，不安",
          "今天是周天，五一调休的一个周末，只休息一天，女朋友回学校了，一个人在上海，今天一天无聊的很，现在21:00准备开始一篇博客。现在在看一个电视叫\"我的阿勒泰\".我女朋友推荐的.刚刚看到一句台词关于写作的:**不知道写作的话，可以先去生活，去受伤！**."
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-12",
    "tags": [
      "行为型设计模式"
    ],
    "categoryId": "pattern",
    "title": "命令模式",
    "date": "2024-05-13",
    "cover": "🏗️",
    "excerpt": "一、概述 最近接触公司一个模块，是公司的首战模块.它其中用的就是命令模式，通过读表创建一个命令队列，然后依次执行.之前没有了解过，一直不知道这个模块是什么内容，最近灵光一现，才发现原来是命令模式.所以写篇博客记录一下. 命令模式是一种常用的...",
    "sections": [
      {
        "heading": "一、概述",
        "paragraphs": [
          "最近接触公司一个模块，是公司的首战模块.它其中用的就是命令模式，通过读表创建一个命令队列，然后依次执行.之前没有了解过，一直不知道这个模块是什么内容，最近灵光一现，才发现原来是命令模式.所以写篇博客记录一下.",
          "命令模式是一种常用的行为型设计模式，它将请求发送者与请求接收者解耦.请求发送者通过命令对象来间接引用接收者.使用系统具有更好灵活性，再可以不修改现有系统源代码的情况下让相同的发送者对应不同的接收者.",
          "命令模式的定义比较复杂，有很多术语.如\"用不同的请求对客户进行参数化\"，\"对请求排队\"\"对请求进行排队等\".",
          "命令模式在我看来最主要的地方就是**执行**，命令者(领导)向接受命令者(员工)发送命令，然后接受命令者执行命令，但大部分命令模式都会和队列结合在一起.命令者发送命令，然后接受命令者依次执行命令."
        ]
      },
      {
        "heading": "2.1 结构",
        "paragraphs": [
          "命令模式的结构核心在于引用了抽象命令类和具体命令类，发送者只要指定一个命令对象，再通过命令对象来调用请求接受者的处理方法.其结构如图所示",
          "![](@img/elifxzab)",
          "命令模式一般包括4个角色",
          "-   **Command(抽象命令模式):**抽象命令类一般是一个抽象类或接口类，在其中声明了用于执行请求的**execute**等方法，通过**execute**方法可以调用请求接受者的相关操作.\n-   **ConcreteComman(具体命令类):**具体命令类是抽象类命令类的子类，实现了抽象命令类的具体声明方法.具体命令类在实现**execute**方法时调用接受者对象的相关操作.\n-   **Invoker(调用者):**调用者即请求发送者，他通过命令对象来**执行**请求.\n-   **Receiver(接收者):**接受者执行与请求相关的操作，具体实现对请求的业务处理."
        ]
      },
      {
        "heading": "2.2 命令队列",
        "paragraphs": [
          "在实际应用中，命令模式总是以命令队列出现，一般与工厂模式结合使用，调用者从工厂模式中获取相应的命令，然后以队列的形式依次发送命令.命令队列就像**批处理**一样，对一组命令对象进行批处理."
        ]
      },
      {
        "heading": "2.3.1 抽象命令类实现",
        "paragraphs": [
          "```csharp\nnamespace CommandMode\n{\n    public abstract class CommandBase\n    {\n        private string[] _parameters;\n        private Action _completeCallBack;\n        private int _taskId = 0;\n        private CommandStatus _status;\n        public CommandBase(string[] parameters, Action completeCallBack, int taskId)\n        {\n            _parameters = parameters;\n            _completeCallBack = completeCallBack;\n            _taskId = taskId;\n            _status = CommandStatus.Idle;\n            OnInit();\n        }\n        //获得参数\n        public string GetParameter(int index)\n        {\n            if (index < 0 || _parameters.Length <= index) return \"\";\n            return _parameters[index];\n        }",
          "public string[] GetParameters()\n        {\n            return _parameters;\n        }",
          "//指令是否可执行\n        public bool IsExecutable()\n        {\n            return true;\n        }\n        // 获得指令当前状态\n        public CommandStatus GetCommandState()\n        {\n            return _status;\n        }\n        // 准备\n        public void Prepare()\n        {\n            if (!ChangeStatusChangeAvailable(CommandStatus.Preparing)) return;\n            _status = CommandStatus.Preparing;\n            OnPrepare();\n            StartExecute();\n        }\n        //开始执行\n        private void StartExecute() \n        {\n            if (IsExecutable()) return;\n            Execute();\n        }\n        //执行\n        public void Execute()\n        {\n            if (!ChangeStatusChangeAvailable(CommandStatus.Executing)) return;\n            _status = CommandStatus.Executing;\n            OnExecute();\n        }\n        //取消\n        public void Cancle()\n        {\n            if (!ChangeStatusChangeAvailable(CommandStatus.Canle)) return;\n            _status = CommandStatus.Canle;\n            OnCancel();\n        }\n        //完成\n        public void Complete()\n        {\n            if (!ChangeStatusChangeAvailable(CommandStatus.Compelete)) return;\n            _status = CommandStatus.Compelete;\n            _completeCallBack?.Invoke();\n            OnComplete();\n        }\n        //错误\n        public void Error()\n        {\n            if (!ChangeStatusChangeAvailable(CommandStatus.Error)) return;\n            _status = CommandStatus.Error;\n            OnError();\n        }\n        //销毁\n        public void Dispose()\n        {\n            if (!ChangeStatusChangeAvailable(CommandStatus.Disposed)) return;\n            _status = CommandStatus.Disposed;\n            OnDispose();\n            _parameters = null;\n            _completeCallBack = null;\n        }\n        public bool IsExecuting()\n        {\n            return _status == CommandStatus.Executing;\n        }",
          "public bool ChangeStatusChangeAvailable(CommandStatus status)\n        {\n            if (_status == CommandStatus.Disposed) return false;\n            return _status != status;\n        }",
          "public abstract void OnInit();\n        public abstract void OnPrepare();\n        public abstract void OnExecute();\n        public abstract void OnCancel();\n        public abstract void OnComplete();\n        public abstract void OnError();\n        public abstract void OnDispose();\n    }",
          "public enum CommandStatus\n    {\n        Error       = 0, //出错\n        Idle        = 1, //闲置\n        Preparing   = 2, //准备执行\n        Executing   = 3, //执行中\n        Canle       = 4, //取消\n        Compelete   = 5, //完成\n        Disposed    = 6, //已销毁\n    }\n}\n```"
        ]
      },
      {
        "heading": "2.3.2 具体命令类实现",
        "paragraphs": [
          "```csharp\nnamespace CommandMode\n{\n    public class ConcreteCommand : CommandBase\n    {\n        private int _param = 0;\n        public override void OnInit()\n        {\n            _param = GetIntParameter(1);\n        }",
          "public override void OnPrepare()\n        {\n        }",
          "public override void OnExecute()\n        {",
          "}",
          "public override void OnCancel()\n        {",
          "}",
          "public override void OnComplete()\n        {",
          "}",
          "public override void OnDispose()\n        {",
          "}",
          "public override void OnError()\n        {",
          "}\n    }\n}",
          "namespace CommandMode\n{\n    internal class DefaultCommand : CommandBase\n    {\n        public override void OnComplete()\n        {\n            base.OnComplete();\n        }\n    }\n}\n```"
        ]
      },
      {
        "heading": "2.3.3 命令工厂类实现",
        "paragraphs": [
          "```csharp\nnamespace CommandMode\n{\n    public static class CommandFactory\n    {\n        public static CommandBase CreateCommandExecutor(CommandExecuteName executeName, Action completeCallback, int taskId, string[] stringParams = null, int[] intParams = null)\n        {\n            CommandBase command = null;\n            switch (executeName)\n            {\n                case CommandExecuteName.ConcreteCommand:\n                    command = new ConcreteCommand();\n                    break;\n                default:\n                    command = new DefaultCommand();\n                    break;\n            }\n            command.Init(completeCallback, taskId, stringParams, intParams);\n            return command;\n        }\n    }",
          "public enum CommandExecuteName\n    {\n        ConcreteCommand = 0,\n    }\n}\n```"
        ]
      },
      {
        "heading": "2.3.4 命令队列类实现",
        "paragraphs": [
          "```csharp\nusing System.Threading.Tasks;",
          "namespace CommandMode\n{\n    internal class CommandSequence\n    {\n        private bool _isComplete = false;\n        private Action _completeCallBack;\n        private List<CommandBase> _commandList;",
          "public CommandSequence(CommonConfig commonConfig,  Action completeCallBack) \n        {\n            _completeCallBack = completeCallBack;\n            _commandList = new List<CommandBase>();\n            CreateCommandList(commonConfig);\n        }",
          "public void CreateCommandList(CommonConfig commonConfig)\n        {\n            if(commonConfig == null || commonConfig.CommonDatas == null || commonConfig.CommonDatas.Length == 0)\n            {\n                OnComplete();\n                return;\n            }\n            foreach(var commandData in commonConfig.CommonDatas)\n            {\n                CommandExecuteName executeName = (CommandExecuteName)commandData.CommandName;\n                var taskId = commandData.TaskId;\n                var intParams = commandData.IntPramas;\n                var stringParams = commandData.StringPramas;\n                var command = CommandFactory.CreateCommandExecutor(executeName, OnCurCommandComplete, taskId, stringParams, intParams);\n                _commandList.Add(command);\n            }\n        }\n        public bool IsComplete() \n        {\n            return _isComplete;\n        }\n        public bool IsExecuted()\n        {\n            bool res = false;\n            foreach (var command in _commandList)\n            {\n                var status = command.GetCommandState();\n                if (status != CommandStatus.Idle && status != CommandStatus.Preparing) \n                {\n                    res = true;\n                    break;\n                }\n            }\n            return res; \n        }",
          "public void Execute()\n        {\n            if (_commandList == null || _commandList.Count == 0)\n            {\n                OnComplete();\n                return;\n            }\n            bool isComplete = true;\n            foreach (var command in _commandList)\n            {\n                var state = command.GetCommandState();\n                if (state == CommandStatus.Idle)\n                {\n                    command.Prepare();\n                    isComplete = false;\n                    break;\n                }\n                else if (state == CommandStatus.Compelete)\n                {",
          "}\n                else\n                {\n                    isComplete = false;\n                    break;\n                }\n            }\n            if (isComplete) { OnComplete(); }\n        }\n        //当前指令执行完毕\n        private void OnCurCommandComplete()\n        {\n            Execute();\n        }",
          "private void OnComplete()\n        {\n            _isComplete = true;\n            _completeCallBack?.Invoke();\n        }\n        public void Dispose()\n        {\n            foreach (var command in _commandList)\n            {\n                command.Dispose();\n            }\n            _commandList?.Clear();\n            _commandList = null;\n        }\n    }\n    public class CommonConfig\n    {\n        public CommonData[] CommonDatas;\n    }\n    public class CommonData\n    {\n        public int TaskId;\n        public int CommandName;\n        public int[] IntPramas;\n        public string[] StringPramas;\n    }\n}\n```"
        ]
      },
      {
        "heading": "3.1 优点",
        "paragraphs": [
          "-   **降低系统耦合度:**由于请求者和接受者之间不存在直接引用，因此请求者与接受者两者之间实现完全解耦，使两者之间具有良好的独立性\n-   **热插拔:**可以比较容易的实现一个命令队列,新的命令也很容易加入到系统中，新增的命令也不会影响到其他类，满足开闭原则"
        ]
      },
      {
        "heading": "3.2 缺点",
        "paragraphs": [
          "使用命令模式可能会导致系统有**过多**的具体命令类，针对每一个请求接收器的调用操作都需要设计一个具体命令类，导致代码中存在很多命令类."
        ]
      },
      {
        "heading": "3.3 使用环境",
        "paragraphs": [
          "系统需要在不同的时间指定请求、将请求排队和执行请求，可以很方便地去使用命令模式."
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-13",
    "tags": [],
    "categoryId": "unity",
    "title": "Unity基于Gradle的Android打包",
    "date": "2024-05-14",
    "cover": "🎮",
    "excerpt": "Unity打包apk一般有两种方式，一种是直接在Unity导出apk,还有一种是先导出gradle工程，再通过外部工具对gradle工程进行构建（如Android Studio). 一、什么是Gradle Gradle是一个项目自动化构建的...",
    "sections": [
      {
        "heading": "Unity基于Gradle的Android打包",
        "paragraphs": [
          "Unity打包apk一般有两种方式，一种是直接在Unity导出`apk`,还有一种是先导出`gradle`工程，再通过外部工具对`gradle`工程进行构建（如Android Studio)."
        ]
      },
      {
        "heading": "一、什么是Gradle",
        "paragraphs": [
          "Gradle是一个项目`自动化构建`的开源工具,基于JVM，它使用一种基于Groovy的特定领域语言(DSL)来声明项目设置.DSL语法和Java相接近."
        ]
      },
      {
        "heading": "二、Unity导出Gradle工程",
        "paragraphs": [
          "-   使用UnityHub安装依赖项: 下载\"Android Build Support\",并且勾选AndroidSDK和NDK工具，以及OpenJDK.\n    \n    Unity将AndroidSDK&NDK和OpenJDK分别安装在/\\[EditorVersion\\]/Editor/Data/PlaybackEngines/AndroidPlayer/SDK`` `NDK` ``OpenJDK中\n    \n    ![image-20240513230502949](@img/jbq3xv0r)\n    \n-   每个Unity版本支持的每个依赖项的版本信息都是不同的，每个Unity都需要特定版本的Android NDK和Android JDK,但Android SDK没有确切的版本要求\n    \n    ![image-20240513230912531](@img/7if01pja)\n    \n    ![image-20240513231015844](@img/5fz1zbpe)\n    \n    ![image-20240513231027127](@img/bx260wgn)\n    \n-   适用于Android的外部工具: External Tools:\n    \n    ![image-20240513231349815](@img/8me6knc7)\n    \n-   打包时勾选`Export Project`点击Export后就会得到Gradle文件夹."
        ]
      },
      {
        "heading": "三、Unity的Grade的层次结构",
        "paragraphs": [
          "![image-20240513232419374](@img/esbhwnad)"
        ]
      },
      {
        "heading": "3.1 Launcher",
        "paragraphs": [
          "![image-20240513232734066](@img/6yy6wehy)",
          "启动器部分，其中包含应用程序的名称及其图标.默认是可启动Unity的简单Android应用程序.",
          "-   src：启动器模块的代码和资源\n-   build.gradle:\n    -   描述如何构建启动器模块，并包含要在构建中包含的依赖项列表\n    -   依赖于`unityLibrary`模块，当构建启动器模块时，unityLibrary必须包含在最终结果中\n    -   对呀自定义Gradle的`Custom Launcher Gradle Template`文件"
        ]
      },
      {
        "heading": "3.2 UnityLibrary",
        "paragraphs": [
          "![image-20240513234140800](@img/tz9ybi95)",
          "Unity模块，包含Unity运行时和播放器数据，可以集成到其他任何Gradle项目中.",
          "-   libs:\n    \n    -   用于存放unityLibrary模块的Android Archive(.arr)和java Archive(.jar)插件\n    -   导出的Unity项目，包含了unity-classes.jar文件(Unity引擎使用的java代码)\n-   src:包含unityLibrary模块的源代码和资源.Unity将源代码和资源放在次目录中（AndroidManifest.xml和java代码等）.\n    \n-   build.gradle:\n    \n    -   描述了如何构建unityLibrary模块，并包含了构建中要包含的依赖项列表\n    -   unityLibrary模块依赖于Unity项目中的所有插件\n    -   对呀自定义Gradle的`Custom Main Gradle Template`文件"
        ]
      },
      {
        "heading": "3.3 build.gradle",
        "paragraphs": [
          "-   整体项目的构建逻辑，负责引入所需的全部子项目Gradle并触发每个构建命令\n-   文件位于项目的根目录下，用于定义适用于项目中的所有模块的依赖项.\n-   会影响所有模块的配置.\n-   可包含用于清理build目录的代码\n-   用于指定`Android Gradle Plugin`版本\n-   对呀自定义Gradle的 `Custom Base Gradle Template`文件"
        ]
      },
      {
        "heading": "3.4 gradle.properties",
        "paragraphs": [
          "-   配置了Gradle和JVM的属性\n-   配置守护进程并管理构建过程中启动JVM的方式\n-   Unity默认添加了数据流文件资源目录中的资源类型**unityStreamingAssets=.unity3d**，告诉Gradle不应该压缩它们。多个文件用\",\"进行分割。\n-   对呀自定义Gradle的`Custom Gradle Properties Template`文件"
        ]
      },
      {
        "heading": "3.5 local.properties",
        "paragraphs": [
          "-   用于配置本地环境属性，如Android SDK或者Android NDK"
        ]
      },
      {
        "heading": "3.6 setting.gradle",
        "paragraphs": [
          "-   用于多项目构建或者具有子项目的项目的定义文件\n-   Unity中通常包含launcher和unityLibrary\n-   如果使用Play Asset Delivery，由于所有的资源包都是单独的模块，所以将会列出每个资源模块."
        ]
      },
      {
        "heading": "4.1 自定义Gradle模板变量",
        "paragraphs": [
          "| 变量 | 描述 |\n| --- | --- |\n| dependencies | 项目依赖项（即，项目使用的库）的列表。 |\n| compileSdkVersion | 构建针对的 API 版本（例如 25） |\n| buildToolsVersion | 使用的 SDK 构建工具（例如 25.0.1） |\n| minSdkVersion | 最小兼容的Android平台版本 |\n| targetSdkVersion | 目标 API 版本（例如，25） |\n| versionCode | 版本码，递增的整数 |\n| versionName | 版本名 |\n| consumerProguardFiles | Proguard的配置文件 |\n| applicationId | Android 应用程序 ID（例如，com.mycompany.myapp） |"
        ]
      },
      {
        "heading": "4.2 Custom Main Gradle Template",
        "paragraphs": [
          "此文件包含有关如何将Unity的 Android 应用程序构建为库的配置信息,对应Gradle结构的\"unityLibrary/build.gradle\"文件.",
          "```java\n//表述这个工程的工程类型，一般包含3种：\n//App类型工程：apply plugin: 'com.android.application'\n//库类型工程:apply plugin: 'com.android.library'\n//Test工程类型:apply plugin: 'com.android.test'\napply plugin: 'com.android.library'",
          "//指构建工程所依赖的所有依赖项\ndependencies {\n    //一般来说有3种依赖类型\n    //对于本地模块的依赖:implementation project(':mylibrary') [mylibrary此名称必须与在您的 settings.gradle 文件中使用 include: 定义的库名称相符）]\n    //本地文件依赖项:implementation fileTree(dir: 'libs', include: ['*.jar'])[对项目的libs目录中 JAR 文件的依赖关系,Gradle会读取build.gradle文件的相对路径]\n    //也可以按如下方式指定各个文件：implementation files('libs/foo.jar', 'libs/bar.jar')\n    //远程文件依赖项:implementation 'com.example.android:app-magic:12.3'[实际是implementation group: 'com.example.android', name: 'app-magic', version: '12.3'的简写]\n    implementation fileTree(dir: 'libs', include: ['*.jar'])\n}\n//针对Android选项的配置块\nandroid {\n    //编译依赖的SDK版本\n    compileSdkVersion 29\n    //构建工具版本\n    buildToolsVersion '30.0.2'",
          "//编译选项\n    compileOptions {\n        //这里配置的是Java 语言的的源码版本\n        sourceCompatibility JavaVersion.VERSION_1_8\n        //这里配置的是Java生成的字节码版本\n        targetCompatibility JavaVersion.VERSION_1_8\n    }\n    //默认的配置\n    defaultConfig {\n        //最小兼容的Android平台版本，如果低于此版本将会阻止用户安装。\n        minSdkVersion 19\n        //指定我们基于哪个版本开发。\n        targetSdkVersion 29",
          "ndk {\n            //ABI 是 Application Binary Interface 的缩写。帮助适配不同的CPU架构。\n            //把除了v7a以外的兼容包都过滤掉\n            abiFilters 'armeabi-v7a'\n        }\n        //版本码，是一个递增的整数\n        versionCode 1\n        //版本名\n        versionName '1.0.2'\n        //Proguard的配置文件，这里面有两个文件一个是unity自身的配置还有一个是我们自己配置的Proguard配置文件\n        consumerProguardFiles 'proguard-unity.txt', 'proguard-user.txt'\n    }\n    //Lint选项配置\n    lintOptions {\n        //当发生错误不终止构建\n        //更多lint配置：https://developer.android.google.cn/reference/tools/gradle-api/4.1/com/android/build/api/dsl/LintOptions?hl=cn\n        abortOnError false\n    }\n    //aapt全称为Android Asset Packaging Tool，为Android资源打包工具。\n    //https://developer.android.google.cn/reference/tools/gradle-api/4.1/com/android/build/api/dsl/AaptOptions?hl=en\n    aaptOptions {\n        //这里表示这些文件类型不会被压缩存储在APK中。\n        //unityStreamingAssets.tokenize 这里获取的是gradle.properties文件中unityStreamingAssets的配置。\n        noCompress = ['.ress', '.resource', '.obb'] + unityStreamingAssets.tokenize(', ')\n        //需要忽略的资源类型\n        ignoreAssetsPattern = \"!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*~\"\n    }\n    //Packaging选项\n    //https://developer.android.google.cn/reference/tools/gradle-api/7.4/com/android/build/api/dsl/PackagingOptions?hl=en\n    packagingOptions {\n        //设置armeabi-v7a相关文件不会被剥离优化压缩\n        doNotStrip '*/armeabi-v7a/*.so'\n    }\n}\n```"
        ]
      },
      {
        "heading": "4.3 Custom Launcher Gradle Template",
        "paragraphs": [
          "此文件包含有关如何构建 Android 应用主模块的配置，对应Gradle结构的\"unityLibrary/launcher.gradle\"文件。",
          "```java\n//此模块为App应用\napply plugin: 'com.android.application'",
          "dependencies {\n    //依赖于unityLibrary本地模块\n    implementation project(':unityLibrary')\n}",
          "android {\n    compileSdkVersion 29\n    buildToolsVersion '30.0.2'",
          "compileOptions {\n        sourceCompatibility JavaVersion.VERSION_1_8\n        targetCompatibility JavaVersion.VERSION_1_8\n    }",
          "defaultConfig {\n        minSdkVersion 19\n        targetSdkVersion 29\n        //设置applicationId，appi要与包名一致，这里Unity会帮我们通过playersetting设置\n        applicationId 'com.DefaultCompany.com.unity.template.mobile2D'\n        ndk {\n            abiFilters 'armeabi-v7a'\n        }\n        versionCode 1\n        versionName '1.0.2'\n    }",
          "aaptOptions {\n        noCompress = ['.ress', '.resource', '.obb'] + unityStreamingAssets.tokenize(', ')\n        ignoreAssetsPattern = \"!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*~\"\n    }",
          "lintOptions {\n        abortOnError false\n    }\n    //这里用于配置我们不同的构建类型\n    buildTypes {\n        debug {\n            //是否启用混淆,启用之后增加反编译成本\n            minifyEnabled false\n            //设置混淆文件规则\n            //getDefaultProguardFile('proguard-android.txt')从Android SDK tools/proguard/文件夹获取默认的 ProGuard规则文件，为我们提供的默认混淆规则文件。\n            //proguardFiles getDefaultProguardFile('proguard-android.txt'),'proguard-rules.pro' 可以设置自定义混淆规则文件。\n            //proguard-rules.pro用于添加自定义位于模块根目录。\n            proguardFiles getDefaultProguardFile('proguard-android.txt')\n            //签名配置\n            signingConfig signingConfigs.debug\n            //是否激活NDK调试\n            jniDebuggable true\n        }\n        release {\n            minifyEnabled false\n            proguardFiles getDefaultProguardFile('proguard-android.txt')\n            signingConfig signingConfigs.debug\n        }\n    }",
          "packagingOptions {\n        doNotStrip '*/armeabi-v7a/*.so'\n    }\n    //改进的应用程序打包方式，能大幅度减少应用体积。\n    //默认情况下，构建器会自动根据CPU架构对屏幕分辨率、语言等维度将app 分拆，如果希望自由控制分拆维度，可以在此控制。\n    //android 5.0以下不支持bundle\n    bundle {\n        //对语言进行拆分\n        language {\n            enableSplit = false\n        }\n        //对屏幕密度进行拆分\n        density {\n            enableSplit = false\n        }\n        //对不同CPU架构进行拆分\n        abi {\n            enableSplit = true\n        }\n    }\n}\n```"
        ]
      },
      {
        "heading": "4.4 Custom Base Gradle Template",
        "paragraphs": [
          "```java\n//在这里指定所有模块的依赖项和远程仓\n//当只有单个模块需要的依赖项应该放在对应的模块级的build.gradle文件中。\nallprojects {\n    //gradle脚本执行所需的依赖项和远程仓\n    buildscript {\n        //使用JCenter和Google作为远程仓,本质就是个Maven仓库\n        repositories {\n            google()\n            jcenter()\n        }\n        //配置依赖关系\n        dependencies {\n            classpath 'com.android.tools.build:gradle:3.6.0'            \n        }\n    }\n    //当前项目所需的依赖项和远程仓\n    //使用JCenter和Google作为远程仓\n    repositories {\n        google()\n        jcenter()\n        //设置源类型目录位置\n        //这里设置我们的unityLibrary模块的libs文件夹\n        flatDir {\n            dirs \"${project(':unityLibrary').projectDir}/libs\"\n        }\n    }\n}\n//定义了一个任务，用于删除项目中build文件夹下的内容\ntask clean(type: Delete) {\n    delete rootProject.buildDir\n}\n```"
        ]
      },
      {
        "heading": "4.5 Custom Gradle Properties Template",
        "paragraphs": [
          "此文件包含 Gradle 构建环境的配置设置,对应Gradle结构的\"gradle.properties\"文件。",
          "```java\n//分配给守护进程，JVM内存的大小，分配较高的值对提高构建性能特别有用。\norg.gradle.jvmargs=-Xmx4096M\n//多个构建任务进行并行执行\norg.gradle.parallel=true\n//Android Gradle插件3.4.0或更高版本时可用，R8和Proguard 相比，R8 可以更快地缩减代码，同时改善输出大小。\nandroid.enableR8=false\n//不对.unity3d在构建应用时进行压缩\nunityStreamingAssets=.unity3d\n```"
        ]
      },
      {
        "heading": "五、 Gradle构建APK",
        "paragraphs": [
          "利用python脚本在Gradle工程中构建apk",
          "-   构建apk脚本:",
          "```python\nimport os\n# gradle路径 user\\.gradle\\wrapper\\dists\\gradle版本号\nGradle =r\"C:\\Users\\lwy\\.gradle\\wrapper\\dists\\gradle-6.1.1-bin\\4i3ntwqiazourd86epxcz427c\\gradle-6.1.1\\bin\"",
          "def StartBuild(gradlePath):\n    os.chdir(gradlePath)\n    # jdk路径\n    os.putenv(\"JAVA_HOME\", r\"C:\\Users\\lwy\\.jdks\\corretto-1.8.0_412\")\n    # android sdk路径\n    os.putenv(\"ANDROID_HOME\", r\"D:\\Android\\SDK\")\n    # gradle路径\n    os.putenv(\"GRADLE_BIN\", r\"C:\\Users\\lwy\\.gradle\\wrapper\\dists\\gradle-6.1.1-bin\\4i3ntwqiazourd86epxcz427c\\gradle-6.1.1\\bin\")",
          "os.system('{}\\gradle clean'.format(Gradle))\n    os.system('{}\\gradle init'.format(Gradle))\n    os.system('{}\\gradle wrapper'.format(Gradle))",
          "os.system('gradlew assembleDebug')",
          "if __name__ == '__main__':\n    # 游戏工程路径\n    gradlePath = r\"D:\\Test\\Fina\"\n    StartBuild(gradlePath)\n    os.system(\"pause\")\n```",
          "-   内网制作android gradle plugin库",
          "1.  复制android gradle plugin本地仓库(需在外网下载)C:\\\\Users\\\\lwy.gradle\\\\caches\\\\modules-2\\\\files-2.1\n    \n2.  利用（ProcessAndroidDependenceFile.py）脚本将文件夹变为可识别仓库\n    \n3.  修改build.gradle的maven 路径(整个文件)\n    \n    **ProcessAndroidDependenceFile.py**：\n    \n    ```python\n     import os\n     import shutil\n     import sys\n     # 本地缓存路径\n     srcFolderPath = \"C:\\Users\\lwy\\.gradle\\caches\\modules-2\\files-2.1\"\n     # 目标路径\n     dstFolderPath = \"D:/Android/repository\"\n    \n     class DataInfo:\n         def __init__(self, destPath, srcPath):\n             self.DestPath = destPath\n             self.SrcPath = srcPath\n    \n     def Start():\n         print(\"ProcessStart=>\" + srcFolderPath)\n         FilesList = []\n    \n         for root, dirs, files in os.walk(srcFolderPath):\n             for f in files:\n                 # print(\"FileName : \" + os.path.join(root, f))\n                 srcPath = os.path.join(root, f)\n                 lastIndex = root.rfind('\\\\')\n                 curPath = root[0:lastIndex]\n                 filesIndex = curPath.find('files-2.1')\n                 filesLen = len('files-2.1')\n                 totalLen = filesIndex + filesLen + 1\n                 str_1 = curPath[0:totalLen]\n                 str_1 = str_1.replace(\"Test\", \"Temp\")\n    \n                 remainStr = curPath[totalLen:]\n                 firstIndex = remainStr.find('\\\\')\n                 str_3 = remainStr[firstIndex + 1:]\n                 firstStr = remainStr[0:firstIndex]\n                 str_2 = firstStr.replace('.', '\\\\')\n                 destPath = str_1 + str_2 + \"\\\\\" + str_3\n                 destPath = destPath.replace(\"\\\\\", '/')\n    \n                 destPath = destPath.replace(srcFolderPath, dstFolderPath)\n                 dataInfo = DataInfo(destPath, srcPath)\n                 FilesList.append(dataInfo)\n    \n         for item in FilesList:\n             if not os.path.exists(item.DestPath):\n                 os.makedirs(item.DestPath)\n             try:\n                 shutil.copy(item.SrcPath, item.DestPath)\n             except IOError as e:\n                 print(\"Unable to copy file. %s\" % e)\n             except:\n                 print(\"Unexpected error:\", sys.exc_info())\n    \n         print(\"ProcessFinished...\")\n    \n     if __name__ == '__main__':\n         Start()\n    ```\n    \n    **build.gradle**：\n    \n    ```java\n     // GENERATED BY UNITY. REMOVE THIS COMMENT TO PREVENT OVERWRITING WHEN EXPORTING AGAIN\n    \n     allprojects {\n         buildscript {\n             repositories {\n                 //google()\n                 //jcenter()\n                maven {\n                     // 本地路径\n                    url 'D:/Android/repository'\n                    metadataSources{\n                        mavenPom()\n                    }\n                }\n             }\n    \n             dependencies {\n                 classpath 'com.android.tools.build:gradle:4.0.1'\n    \n             }\n         }\n    \n         repositories {\n             google()\n             jcenter()\n            maven {\n                url 'D:/Android/repository'\n                metadataSources{\n                    mavenPom()\n                }\n            }\n             flatDir {\n                 dirs \"${project(':unityLibrary').projectDir}/libs\"\n             }\n         }\n     }\n    \n     task clean(type: Delete) {\n         delete rootProject.buildDir\n     }\n    ```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-14",
    "tags": [
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "设计模式",
    "date": "2024-05-27",
    "cover": "🏗️",
    "excerpt": "一、设计模式概念 1.1 设计模式是什么 设计模式是软件设计中常见问题的典型解决方案，他们就像能根据需求进行调整的预制蓝图，可用于解决代码中反复出现的设计问题.设计模式就是问题反复出现，然后通过设计来解决问题，然后记录下来解决方式，进行总结...",
    "sections": [
      {
        "heading": "1.1 设计模式是什么",
        "paragraphs": [
          "设计模式是软件设计中常见问题的典型解决方案，他们就像能根据需求进行调整的预制**蓝图**，可用于解决代码中反复出现的设计问题.设计模式就是问题反复出现，然后通过设计来解决问题，然后记录下来解决方式，进行总结就成为了设计模式.",
          "**设计模式:在某个场景下，针对某类问题的某种通用的解决方案.**",
          "-   **场景**:项目所在的环境\n    \n-   **问题：**约束**条件**，项目目标等\n    \n-   **解决方案：**通用、可复用的设计，解决约束达到的目标"
        ]
      },
      {
        "heading": "1.2 设计模式的作用",
        "paragraphs": [
          "使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性。",
          "-   **可重用性:**使功能相同的代码，不需要多次编写\n-   **可读性:**编程规范性，在项目开发中，便于其他程序员的阅读和理解\n-   **可扩展性:**当需要添加新的功能时，对原来的功能没有影响\n-   **高内聚低耦合：**一个模块内各个元素彼此结合的紧密程度高（高内聚），不同的模块之间独立存在(低耦合)"
        ]
      },
      {
        "heading": "2.1 根据目的分类",
        "paragraphs": [
          "设计模式根据目的分类（模式用来做什么的）一共分为三大类,分别是创建型模式、结构型模式、行为型模式.",
          "-   **创建型模式：**针对对象实例化的模式，用于解耦对象的实例化过程\n-   **结构型模式：**将对象和类组装成较大的结构，并同时保持结构的灵活性和高效性\n-   **行为型模式：**对象之间如何高效沟通和职责划分.",
          "![image-20240519225959883](@img/o2cxfz9b)"
        ]
      },
      {
        "heading": "2.2 根据范围分类",
        "paragraphs": [
          "设计模式根据范围分类（模式主要用于处理类之间的关系还是处理对象之间的关系）可分为两大类，分别是**类模式**和**对象模式**",
          "-   **类模式:**处理类和子类之间的关系，这些关系通过继承建立，在编译时就被确定下来\n-   **对象模式：**处理对象之间的关系，这些关系在随时改变，更具有动态性",
          "![image-20240519234932970](@img/v4ivfgv3)"
        ]
      },
      {
        "heading": "3.1 创建者模式",
        "paragraphs": [
          "-   **单例模式:**某个**静态类**只有一个实例，且提供一个全局的访问点.\n-   **工厂模式：**提供一个创建对象的方法，让其子类决定需要实例化哪个工厂类.\n-   **抽象工厂：**提供一个创建一系列相关或相互依赖对象的接口，而无需指定他们具体的类.\n-   **建造者模式：**将一个**复杂对象**的构建与它的**表示**分离，使同样的构建过程可以创建不同的表示.\n-   **原型模式：**通过原型实例指定创建对象的类型，通过**复制**这个原型来创建新的对象."
        ]
      },
      {
        "heading": "3.2 结构型模式",
        "paragraphs": [
          "-   **适配器模式:**将一个类的接口转换为客户希望的另一个接口，让那些接口不兼容的类可以一起工作.\n-   **桥接模式:**将抽象部分与它实现的部分解耦，使两者都可以独立的变化\n-   **组合模式：**组合多个对象形成**树状结构**以表示具有**部分-整体**关系的层次结构.\n-   **装饰模式：**动态地给对象增加一些额外的职责（**拓展功能**）\n-   **外观模式：**为子系统中的一组接口提供了一个统一的入口.\n-   **享元模式：**通过共享技术有效地支持大量的**细粒度对象**的复用.\n-   **代理模式：**给对象提供一个代理或占位符，并由代理对象来控制对原对象的访问"
        ]
      },
      {
        "heading": "3.3 行为者模式",
        "paragraphs": [
          "-   **责任链模式：**一个请求需要在多个对象之间传递，每个对象都可能**处理**该请求或者将其传递给下一个对象。\n-   **命令模式：**将请求封装成一个所有信息独立的对象，可以根据不同的请求对方法进行参数化、延迟请求执行或将其放入队列中。\n-   **解释器模式：**给定一个语言，定义它的**文法**的一种表示，并定义一个解释器，这个解释器用来解释语言中的句子。\n-   **迭代器模式：**提供一个方法顺序访问聚合对象的各个元素，而又不用暴露该对象的内部表示。\n-   **中介者模式：**定义一个中间对象来封装一系列对象之间的交互，中间者可以使个对象之间不需要显式地相互应用，从而使其耦合松散，可以独立地改变它们之间地交互。\n-   **备忘录模式：**在不破坏封装地前提下捕获一个对象的内部状态，并在对象之外保存该状态，可以在以后恢复对象之前的状态。\n-   **观察者模式：**定义了对象之间的一个一对多的依赖关系，当一个被依赖的对象状态发生改变时，依赖的对象状态也会随之改变。\n-   **状态模式：**让一个对象的内部状态发生变化时改变其行为，使其看上去改变了自身所属的类一样。\n-   **策略模式：**定义一系列算法，将每个算法给封装起来，并让它们能够相互替换，**算法的变化**不会影响到使用算法的客户。\n-   **模板模式：**定义一个操作中方法框架，允许子类在不修改结构的情况下重新方法的特定步骤。\n-   **访问者模式：**表示一个作用于某对象结构的各个元素的操作。"
        ]
      },
      {
        "heading": "四、 设计模式的六大原则",
        "paragraphs": [
          "![image-20240527220545310](@img/4v4t9igm)"
        ]
      },
      {
        "heading": "4.1 单一职责原则",
        "paragraphs": [
          "**定义:**一个对象应该只包含单一职责，并且该职责被完整地封装在一个类中。",
          "**优点:**",
          "-   可以降低类的复杂度，一个类只负责一项职责。\n    \n-   提高类的可读性，提高系统的可维护性。\n    \n-   变更引起的风险降低，高类聚，低耦合。"
        ]
      },
      {
        "heading": "4.2 开放封闭原则",
        "paragraphs": [
          "**定义:**一个软件实体(类、模块、函数)应该对外扩展，对修改关闭。",
          "**关键点:用抽象构建框架，用实现扩展细节**",
          "其实，剩下的那5项原则，恰恰是告诉我们用抽象构建框架，用实现扩展细节的注意事项而已：",
          "1.  **单一职责原则告诉我们实现类要职责单一；**\n2.  **里氏替换原则告诉我们不要破坏继承体系；**\n3.  **依赖倒置原则告诉我们要面向接口编程；**\n4.  **接口隔离原则告诉我们在设计接口的时候要精简单一；**\n5.  **迪米特法则告诉我们要降低耦合。**\n6.  **开闭原则是总纲，他告诉我们要对扩展开放，对修改关闭。**"
        ]
      },
      {
        "heading": "4.3 里氏替换原则",
        "paragraphs": [
          "**定义:**所有引用基类的地方必须能够透明地使用其子类地对象",
          "**关键点:**",
          "-   子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法。\n-   子类可以增加自己特有的方法。\n-   父类设计为抽象类或者接口，让子类继承父类或实现父类接口"
        ]
      },
      {
        "heading": "4.4 依赖倒置原则",
        "paragraphs": [
          "**定义:**高层模块不应该依赖低层模块，它们都应该依赖抽象。**抽象不应该依赖细节，细节应该依赖于抽象**，",
          "**关键点:针对接口编程，不要针对实现编程。**",
          "**优点:**",
          "-   降低类之间的耦合性。\n-   提高系统的稳定性，降低修改程序造成的风险。"
        ]
      },
      {
        "heading": "4.5 接口隔离原则",
        "paragraphs": [
          "**定义:**客户端不应该依赖它不需要的接口。",
          "**关键点:**",
          "-   接口尽量小，但是要有限度，如果过小会导致系统接口泛滥，不利于维护\n-   为依赖接口的类定制服务，只暴露给调用的类它需要的方法，它不需要的方法则隐藏起来。"
        ]
      },
      {
        "heading": "4.6 迪米特原则(最少知道原则)",
        "paragraphs": [
          "**定义：**一个对象应该对其他对象保持最少的了解。即一个类对自己依赖的类知道的越少越好（只与直接的朋友通信） 每个对象都会与其他对象有耦合关系，只要两个对象之间有耦合关系，我们就说这两个对象之间是朋友关系。",
          "耦合的方式很多，如依赖、关联、组合、聚合等。其中，我们称出现**成员变量**、**方法参数**、**方法返回值**中的类为直接的朋友，而出现在**局部变量**中的类则不是直接的朋友。也就是说，陌生的类最好不要作为局部变量的形式出现在类的内部。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-15",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "Unity的List底层源码剖析",
    "date": "2024-05-29",
    "cover": "🎮",
    "excerpt": "我们在Unity经常会使用List类型，但是却没有好好了解过List类型，它其实是使用了一个连续的内存块来存储元素，它的结构有点类似链表，但又与链表有着许多不同的地方.让我们来了解一下List的底层实现. C#的List源码: C#源码 一...",
    "sections": [
      {
        "heading": "Unity的List底层源码剖析",
        "paragraphs": [
          "我们在Unity经常会使用`List`类型，但是却没有好好了解过`List`类型，它其实是使用了一个连续的内存块来存储元素，它的结构有点类似链表，但又与链表有着许多不同的地方.让我们来了解一下`List`的底层实现.",
          "C#的List源码: [C#源码](https://referencesource.microsoft.com/#mscorlib/system/collections/generic/list.cs)"
        ]
      },
      {
        "heading": "一、构造函数",
        "paragraphs": [
          "`List`是C#中一个常见的可伸缩的数组组件，通常用来代替数组，其底层的数据结构就是基于数组（非链表）.由于它是可伸缩的，所有我们在编写程序的时候不需要手动的去分配数组的大小，甚至将它当作一个链表去使用.",
          "当我们创建一个List实例时，如果没有指定容量和集合的话，那么初始容量为0，`List`内部的数组大小为0",
          "```csharp\npublic class List<T> : IList<T>, System.Collections.IList, IReadOnlyList<T>\n{\n    private const int _defaultCapacity = 4;",
          "private T[] _items; // 主要数组\n    private int _size; // 数组大小(非容量)\n    private int _version; // List的版本（List内部维持）",
          "static readonly T[] _emptyArray = new T[0]; // 默认空数组",
          "// 构造函数: 默认为空数组，容量为0\n    public List()\n    {\n        _items = _emptyArray;\n    }",
          "// 构造函数：声明初始容量\n    public List(int capacity)\n    {\n        if (capacity < 0) ThrowHelper.ThrowArgumentOutOfRangeException(ExceptionArgument.capacity, ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);\n        Contract.EndContractBlock();",
          "if (capacity == 0)\n            _items = _emptyArray;\n        else\n            _items = new T[capacity];\n    }",
          "// 构造函数：声明集合的内容，列表的大小和容量都等于给定的集合 \n    public List(IEnumerable<T> collection)\n    {\n        if (collection == null)\n            ThrowHelper.ThrowArgumentNullException(ExceptionArgument.collection);\n        Contract.EndContractBlock();",
          "ICollection<T> c = collection as ICollection<T>;\n        if (c != null)\n        {\n            int count = c.Count;\n            if (count == 0)\n            {\n                _items = _emptyArray;\n            }\n            else\n            {\n                _items = new T[count];\n                c.CopyTo(_items, 0);\n                _size = count;\n            }\n        }\n        else\n        {\n            _size = 0;\n            _items = _emptyArray;\n            using (IEnumerator<T> en = collection.GetEnumerator())\n            {\n                while (en.MoveNext())\n                {\n                    Add(en.Current);\n                }\n            }\n        }\n    }\n}\n```"
        ]
      },
      {
        "heading": "二、List的Capacity",
        "paragraphs": [
          "Capacity即list的容量，当List的容量不足时，就会整个数组的容量都动态地扩容一倍。",
          "```csharp\n    public int Capacity\n    {\n        get => this._items.Length;\n        set\n        {\n            if (value < this._size)\n                ThrowHelper.ThrowArgumentOutOfRangeException(ExceptionArgument.value, ExceptionResource.ArgumentOutOfRange_SmallCapacity);\n            if (value == this._items.Length)\n                return;\n            if (value > 0)\n            {\n                T[] destinationArray = new T[value];\n                if (this._size > 0)\n                    // 将原数组的数据拷贝到新数组中\n                    Array.Copy((Array)this._items, (Array)destinationArray, this._size);\n                this._items = destinationArray;\n            }\n            else\n                this._items = List<T>._emptyArray;\n        }\n    }\n```"
        ]
      },
      {
        "heading": "三、Add接口剖析",
        "paragraphs": [
          "`List`每次添加一个元素时,都会判断数组的容量够不够，如果不够将调用`Grow`函数来增加容量.",
          "其中`Grow` 函数有这么一行代码",
          "`int num = this._items.Length = 0 ? _defaultCapacity : 2 * this._items.Length;`",
          "**每次容量不够时，整个数组的容量都会扩增一倍**, \\_defaultCapacity表示容量的默认值为4，因此扩充的路线为4, 8, 16, 32, 64, 128, 256, 512 ...以此类推。",
          "**注意:** List频繁的使用Add时，数组会不断被扩容，如果使用不当，会浪费大量内存空间，也会造成GC的不小负担。",
          "```csharp\n    public void Add(T item)\n    {\n        ++this._version;\n        T[] items = this._items;\n        int size = this._size;\n        if ((uint)size < (uint)items.Length)\n        {\n            this._size = size + 1;\n            items[size] = item;\n        }\n        else\n            this.AddWithResize(item);\n    }",
          "private void AddWithResize(T item)\n    {\n        int size = this._size;\n        this.Grow(size + 1);\n        this._size = size + 1;\n        this._items[size] = item;\n    }",
          "internal void Grow(int capacity)\n    {\n        int num = this._items.Length == 0 ? _defaultCapacity : 2 * this._items.Length;\n        if ((uint)num > 2147483591U)\n            num = 2147483591;\n        if (num < capacity)\n            num = capacity;\n        this.Capacity = num;\n    }\n```"
        ]
      },
      {
        "heading": "四、Remove接口剖析",
        "paragraphs": [
          "Remove()函数中包括`IndexOf()`和`RemoveAt()`函数, 其中使用`IndexOf()`是利用`Array.IndexOf`接口来查找元素的索引位置，使用`RemoveAt`是利用`ArrayCopy`接口将指定位置的后面元素进行覆盖，从而来删除指定位置的元素。",
          "```csharp\n    public bool Remove(T item)\n    {\n        int index = this.IndexOf(item);\n        if (index < 0)\n            return false;\n        this.RemoveAt(index);\n        return true;\n    }",
          "public int IndexOf(T item)\n    {\n        return Array.IndexOf<T>(this._items, item, 0, this._size);\n    }",
          "public void RemoveAt(int index)\n    {\n        if ((uint)index > (uint) this._size)\n            ThrowHelper.ThrowArgumentOutOfRange_IndexMustBeLessException();\n        --this._size;\n        if (index < this._size)\n            Array.Copy((Array)this._items, index + 1, (Array)this._items, index, this._size - index);\n        if (RuntimeHelpers.IsReferenceOrContainsReferences<T>())\n            this._items[this._size] = default (T);\n        ++this._version;\n    }\n```"
        ]
      },
      {
        "heading": "五、Insert接口剖析",
        "paragraphs": [
          "与Add接口一样，先检查数组容量是否足够，不足则扩容两倍。`Insert()`插入元素时，采用的与Remove类似，是复制数组的形式，将数组里指定元素后面的所有元素向后移动一个位置。",
          "```csharp\n    public void Insert(int index, T item)\n    {\n        if ((uint)index > (uint) this._size)\n            ThrowHelper.ThrowArgumentOutOfRangeException(ExceptionArgument.index, ExceptionResource.ArgumentOutOfRange_ListInsert);\n        if (this._size == this._items.Length)\n            this.Grow(this._size + 1);\n        if (index < this._size)\n            Array.Copy((Array)this._items, index, (Array)this._items, index + 1, this._size - index);\n        this._items[index] = item;\n        ++this._size;\n        ++this._version;\n    }\n```"
        ]
      },
      {
        "heading": "6.1 []接口",
        "paragraphs": [
          "\\[\\]接口是直接使用数组的索引方式获取元素。",
          "```csharp\n    public T this[int index]\n    {\n        get\n        {\n            if ((uint) index> (uint) _size)\n                ThrowHelper.ThrowArgumentOutOfRange_IndexMustBeLessException();\n            return _items[index];\n        }\n        set\n        {\n            if ((uint) index > (uint) _size)\n                ThrowHelper.ThrowArgumentOutOfRange_IndexMustBeLessException();\n            _items[index] = value;\n            _version++;\n        }\n    }\n```"
        ]
      },
      {
        "heading": "6.2 Clear接口",
        "paragraphs": [
          "采用了`Array.Clear()`清除对象引用的标记，便于垃圾回收。",
          "```csharp\n    public void Clear()\n    {\n        ++this._version;\n        if (RuntimeHelpers.IsReferenceOrContainsReferences<T>())\n        {\n            int size = this._size;\n            this._size = 0;\n            if (size < 0)\n                return;\n            Array.Clear(this._items, 0, _size);\n        }\n        else\n            this._size = 0;\n    }\n```"
        ]
      },
      {
        "heading": "6.3 Contains接口",
        "paragraphs": [
          "直接使用`Array.IndexOf`查找元素是否存在。",
          "```csharp\n    public bool Contains(T item) => this._size != 0 && this.IndexOf(item) > 0;\n```"
        ]
      },
      {
        "heading": "6.4 ToArray接口",
        "paragraphs": [
          "`ToArray`接口是重新创建了一个大小一直的数组，然后将原有数组上的内容复制到新数组中，在将新数组返回。",
          "**注意**:如果使用过多，就会造成大量内存的分配，会使内存上留上很多无用的垃圾。",
          "```csharp\n    public T[] ToArray()\n    {\n        if (this._size == 0)\n            return List<T>._emptyArray;\n        T[] destinationArray = new T[this._size];\n        Array.Copy((Array) this._items, (Array)destinationArray, this._size);\n        return destinationArray;\n    }\n```"
        ]
      },
      {
        "heading": "6.5 Find接口",
        "paragraphs": [
          "查找接口，线性查找，对每个元素进行比较，时间复制度为O(n)",
          "```csharp\n    public T? Find(Predicate<T> match)\n    {\n        if (match == null)\n            ThrowHelper.ThrowArgumentNullException(ExceptionArgument.match);\n        for (int index = 0; index < this._size; index++)\n        {\n            if (match(this._items[index]))\n                return this._items[index];\n        }",
          "return default(T);\n    }\n```"
        ]
      },
      {
        "heading": "6.6 Enumerator接口",
        "paragraphs": [
          "Enumerator接口是枚举迭代部分细节的接口，**注意：每次获得迭代器时，Enumerator都会被创建出来，如果大量使用迭代器，则会产生大量的垃圾**,所有我们在开发时尽量不要使用foreach。",
          "```csharp\npublic List<T>.Enumerator GetEnumerator() => new Enumerator(this);",
          "public struct  Enumerator : IEnumerator<T>, IDisposable, IEnumerator\n    {\n        private readonly List<T> _list;\n        private int _index;\n        private readonly int _version;\n        private T _current;",
          "internal Enumerator(List<T> list)\n        {\n            this._list = list;\n            this._index = 0;\n            this._version = list._version;\n            this._current = default(T);\n        }",
          "public void Dispose()\n        {",
          "}",
          "public bool MoveNext()\n        {\n            List<T> list = this._list;\n            // _version判断是否对list有修改\n            if (this._version != list._version || (uint)this._index >= (uint)list._size)\n            {\n                return this.MoveNextRare();\n            }",
          "this._current = list._items[this._index];\n            this._index++;\n            return true;\n        }",
          "private bool MoveNextRare()\n        {\n            // _version版本不一致，则抛出异常\n            if (this._version != this._list._version)\n                ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumFailedVersion();\n            this._index = this._list._size + 1;\n            this._current = default(T);\n            return false;\n        }",
          "public T Current => this._current;",
          "object? IEnumerator.Cureent\n        {\n            get\n            {\n                if (this._index == 0 || this._index == this._list._size + 1)\n                    ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumOpCantHappen();\n                return (object)this.Current;\n            }\n        }",
          "void IEnumerator.Reset()\n        {\n            if (this._version != this._list._version)\n                ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumFailedVersion();\n            this._index = 0;\n            this._current = default(T);\n        }\n    }",
          "// foreach 实现原理\n    var _enumerator = list.GetEnumerator();\n    while (_enumerator.MoveNext())\n    {",
          "}\n```"
        ]
      },
      {
        "heading": "6.7 Sort接口",
        "paragraphs": [
          "Sort接口是排序接口，它使用了Array.Sort接口进行排序。",
          "```csharp\n    public void Sort(int index, int count, IComparable<T> comparer)\n    {\n        if (index < 0)\n            ThrowHelper.ThrowIndexArgumentOutOfRange_NeedNonNegNumException();\n        if (count < 0)\n            ThrowHelper.ThrowArgumentOutOfRangeException(ExceptionArgument.count, ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);\n        if (this._size - index < count)\n            ThrowHelper.ThrowArgumentException(ExceptionResource.Argument_InvalidOffLen);\n        if (count > 1)\n            Array.Sort<T>(this._items, index, count, comparer);\n        ++this._version;\n    }\n```"
        ]
      },
      {
        "heading": "七、总结",
        "paragraphs": [
          "部分源码看出来，List的**效率并不高，只是通用性强**，List的内存分配方式也极为不合理，当List里的元素不断增加时，会多次重新分配数组，导致原有的数组被抛弃，最后GC被调用时就会造成回收的压力。如果我们在使用List列表时提前声明列表大小时，增加元素时就不会重新生成数组了。",
          "**List并不是高效的组件，只是通用性比较强，真实情况下，它比数组的效率还要差，它只是一个兼容性比较强的组件，好用但是效率并不高。**"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-16",
    "tags": [
      "基础算法",
      "排序算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "常用的排序算法",
    "date": "2024-05-31",
    "cover": "📐",
    "excerpt": "一、快速排序 快速排序是一种最坏情况为O(n^2)的算法，虽然这个情况比较差，但是它平均性能比较好，其排序期望运行时间为O(nlogn),另外由于快速排序不消耗额外的内存空间，因此在很多地方都用快速排序，如数组的排序等。快速排序可以说是最常...",
    "sections": [
      {
        "heading": "一、快速排序",
        "paragraphs": [
          "快速排序是一种最坏情况为O**(n^2)**的算法，虽然这个情况比较差，但是它平均性能比较好，其排序期望运行时间为**O(nlogn)**,另外由于快速排序**不消耗额外的内存空间**，因此在很多地方都用快速排序，如数组的排序等。快速排序可以说是最常见、最好用的排序算法。",
          "**排序算法步骤:**",
          "1.  从序列中选择一个元素作为基准元素。\n2.  每次排序，都把所有比基准小的元素移动到基准元素的左边，把比基准元素大的移动到右边。\n3.  在以基准为中心轴，分开来的两个（一大一小）区块依次进行递归、筛选后，在对两个区域进行前两个步骤的处理。",
          "**注意:**排序算法最差的情况是，每次都选到最小或者最大的数字，每次筛选都要充分地移动，最后使时间复杂度达到**O(n^2)。**所以要进行优化，可以采用**三数取中**进行优化，每次去最中间的数，因为进行过一次排序后，中间数至少是第二小或者第二大的数，那么取出来的中轴数就会比较靠近中位数。",
          "```csharp\n        public void QuickSort(int[] arr, int l, int r)\n        {\n            if (l > r) return;\n            int i = l - 1, j = r + 1, x = arr[(l + r) >> 1];\n            while (i > j)\n            {\n                do i++; while (arr[i] < x);\n                do j--; while (arr[j] > x);\n                if(i < j)\n                {\n                    int temp = arr[i];\n                    arr[i] = arr[j];\n                    arr[j] = temp;\n                }\n            }",
          "QuickSort(arr, l, j);\n            QuickSort(arr, j + 1, r);\n        }\n```"
        ]
      },
      {
        "heading": "二、归并排序",
        "paragraphs": [
          "归并排序的时间复杂度为**O(nlogn)**的算法，而且它不像快速排序一样，归并排序是各种情况下都是不变的O(nlogn)，但是由于归并排序需要额外开辟数组来完成，因此归并排序有较大的空间消耗。",
          "**排序算法步骤:**",
          "1.  将数组不断地进行二分，直到数组划分为n个(数组个数)由单元素构成地子数组，整个划分过程中所有子数组构成满二叉树地逻辑结构。\n2.  数组划分完后，将两两分组地数组进行逐层进行归并操作，最终完成排序操作。",
          "归并排序其实就是基于分治思想和归并排序而设计出来的高效排序算法，其主要思想就是先将数组划分，然后将**两个有序的子序列合并成一个有序序列的算法**。",
          "```csharp\n        public void MergeSort(int[] arr, int l, int r)\n        {\n            if(l > r) return;\n            int mid = (l + r) >> 1;\n            MergeSort(arr, l, mid);\n            MergeSort(arr, mid + 1, r);",
          "int i = l, j = mid + 1, k = 0;\n            while(i <= mid && j <= r)\n            {\n                if (arr[i] < arr[j]) temp[k++] = arr[i];\n                else temp[k++] = arr[j];\n            }\n            while(i <= mid) temp[k++] = arr[i];\n            while(j <= r) temp[k++] = arr[j];\n            for (i = l, j = 0; i <= r ; i++, j ++)\n            {\n                arr[i] = temp[j];\n            }\n        }\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-17",
    "tags": [
      "创建型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "三种工厂模式",
    "date": "2024-06-03",
    "cover": "🏗️",
    "excerpt": "一、简单工厂模式 1.1 概述 简单工厂模式并不属于GoF的23种经典模式的一种，但通常将它作为学习其他工厂模式的基础，而且在实际中，它也是运用最广泛的一种设计模式。其主要实现步骤是将需要创建的各种不同对象的代码封装到不同的具体产品类中，这...",
    "sections": [
      {
        "heading": "1.1 概述",
        "paragraphs": [
          "简单工厂模式并**不属于GoF**的23种经典模式的一种，但通常将它作为学习其他工厂模式的基础，而且在实际中，它也是运用最广泛的一种设计模式。其主要实现步骤是将需要创建的各种不同对象的代码封装到不同的**具体产品类**中，这些**具体产品类**的公共属性与方法提取放在一个抽象产品中，**具体产品类继承抽象产品类**，然后再在工厂类中提供一个创建产品的工厂方法，该方法根据所传不同的参数来创建不同的具体产品。",
          "**定义：**定义一个工厂类，它可以根据参数的不同返回创建不同类的实例，被创建的实例通常都具有共同的父类。",
          "由于简单工厂模式中用于创建实例的方法通常是静态方法，所以简单工厂模式又称为静态工厂方法模式，它是一种**类创建型模式**。"
        ]
      },
      {
        "heading": "1.2 模式结构",
        "paragraphs": [
          "1.  **Factory（工厂角色）：**工厂角色即工厂类，负责实现创建所有具体产品实例的内部逻辑，会提供一个静态的工厂方法**factoryMethod**，返回类型则是**抽象产品类型Product类**。\n2.  **Product（抽象产品角色）：**所有具体工厂类的父类，封装了各种产品对象的共有方法。\n3.  **ConcreteProduct(具体产品角色)：**它是简单工厂模式的创建目标，所有被创建的对象都充当这个角色的某个具体类的实例。",
          "![image-20240601000037917](@img/epeoyw2g)"
        ]
      },
      {
        "heading": "1.3 具体实现",
        "paragraphs": [
          "例如公司需要开发一套图表库，其中包括了不同外观的图表，例如柱状图(HistogramChart)、饼状图（PieChart）、折线图（LineChart）等。",
          "-   **Chart(Product)：**抽象图表接口，充当抽象产品类。",
          "```csharp\n    public interface Chart\n    {\n        public void display();\n    }\n```",
          "-   HistogramChart、PieChart、LineChart(ConcreteProduct): 具体产品类",
          "```csharp\n//HistogramChart:柱状图类(具体产品类)  \n    public class HistogramChart : Chart\n    {\n        public HistogramChart()\n        {\n            Console.WriteLine(\"创建柱状图!\");\n        }",
          "public void display()\n        {\n            Console.WriteLine(\"显示柱状图!\");\n        }\n    }\n// PieChart：饼状图类（具体产品类）\n    public class PieChart : Chart\n    {\n        public PieChart()\n        {\n            Console.WriteLine(\"创建饼状图！\");\n        }\n        public void display()\n        {\n            Console.WriteLine(\"显示饼状图!\");\n        }\n    }\n//LineChart:折线图类(具体产品类)\n    public class LineChart : Chart\n    {\n        public LineChart()\n        {\n            Console.WriteLine(\"创建折线图！\");\n        }\n        public void display()\n        {\n            Console.WriteLine(\"显示饼状图!\");\n        }\n    }\n```",
          "-   **ChartFactory（Factory）:**图标工厂类(工厂类)",
          "```csharp\n    public class ChartFactory\n    {\n        public static Chart GetChart(string type) \n        {\n            Chart chart = null;\n            if (type.Equals(\"HistogramChart\"))\n            {\n                chart = new HistogramChart();\n            }\n            else if (type.Equals(\"Pie\"))\n            {\n                chart = new PieChart();\n            }\n            else if (type.Equals(\"Line\"))\n            {\n                chart = new LineChart();\n            }\n            return chart;\n        }\n    }\n```",
          "-   Client测试类:",
          "```csharp\n        static void Main(string[] args)\n        {\n            // 通过静态工厂方法创建产品\n            Chart chart = ChartFactory.GetChart(\"HistogramChart\");\n            chart?.display();\n            // 输出创建柱状图！ 显示柱状图\n        }\n```"
        ]
      },
      {
        "heading": "1.4 优缺点",
        "paragraphs": [
          "-   **优点:**\n    1.  实现了对象创建和使用的分离，通过使用工厂类,外界可以从直接创建具体产品对象的尴尬局面摆脱出来,仅仅需要负责“消费”对象就可以了。\n    2.  提高了系统的灵活性，可以通过配置文件，在不修改任何客户端代码情况下更换和增加新的具体产品类。\n-   **缺点:**\n    1.  由于工厂类集中了所有产品的创建逻辑，职责过重。\n    2.  系统扩展困难，一旦添加新产品就不得不修改工厂逻辑，当产品过多时，会造成工厂逻辑复杂，不利用维护。"
        ]
      },
      {
        "heading": "1.5 使用场景",
        "paragraphs": [
          "1.  当工厂类负责创建的对象比较少时，由于创建的对象较少，不会造成工厂方法中的业务逻辑太过复杂。\n2.  客户只知道传入工厂类的参数，对于如何创建对象（逻辑）不关心。"
        ]
      },
      {
        "heading": "2.1 概述",
        "paragraphs": [
          "工厂方法模式是简单工厂的延伸，它弥补了简单工厂模点，更好的符合了开闭原则的要求，在增加新的具体产品对象中不需要对已有系统进行任何修改。工厂方法模式引入了**抽象工厂类和具体工厂类**，具体工厂类继承于抽象工厂，具体工厂类用于生产具体产品类的实例，可以使**不修改具体工厂类**的情况下引进心新的产品类。",
          "**定义:抽象工厂**定义一个创建对象的接口，但是让**(具体工厂)**子类决定哪一个**(产品)**类实例化。",
          "工厂方法模式又简称为工厂模式，工厂方法模式是一种**类创建型模式**。"
        ]
      },
      {
        "heading": "2.2 模式结构",
        "paragraphs": [
          "1.  **Factory(抽象工厂):**声明一个工厂方法(FactoryMethod),用于返回一个产品。\n2.  **ConcreteFactory(具体工厂)：**它是抽象工厂的子类，实现了抽象工厂中声明的工厂方法，并由Client调用，返回一个具体产品类的实例。\n3.  **Product（抽象产品）:**定义产品的接口，也就是具体产品类的公共父类\n4.  **ConcreteProduct(具体产品):**实现了抽象产品的接口，具体产品由具体工厂类创建，具体产品和具体工厂之间一一对应。",
          "![image-20240603003223354](@img/9pxzxobx)"
        ]
      },
      {
        "heading": "2.3 具体实现",
        "paragraphs": [
          "例如公司需要运行日志记录器(Logger)可以通过多种途径保存系统的运行日志，例如通过文件记录或者数据库记录，用户可以通过修改配置文件灵活地更换日志记录方式。",
          "-   **LoggerFactory**：日志记录器工厂接口**（抽象工厂）**\n    \n    ```csharp\n    // 日志记录器工厂接口: 抽象工厂\n    public interface LoggerFactory\n    {\n      public Logger CreateLogger();\n    }\n    ```\n    \n-   **DataBaseLoggerFactory、FileLoggerFactory：** 数据库/文件日志记录器工厂类**(具体工厂类)**\n    \n    ```csharp\n    // 数据库日志记录器工厂类: 具体工厂类\n    public class DataBaseLoggerFactory : LoggerFactory\n    {\n      public Logger CreateLogger()\n      {\n          Logger logger = new DataBaseLogger();\n          return logger;\n      }\n    }\n    // 文件日志记录器工厂类: 具体工厂类\n    public class FileLoggerFactory : LoggerFactory\n    {\n      public Logger CreateLogger()\n      {\n          Logger logger = new FileLogger();\n          return logger;\n      }\n    }\n    ```\n    \n-   **Logger：**日志记录接口**(抽象产品)**\n    \n    ```csharp\n    // 日志记录接口(抽象产品)\n    public interface Logger\n    {\n        public void WriteLog();\n    }\n    ```\n    \n-   **DataBaseLogger、FileLogger**:数据库/文件记录器(具体产品)\n    \n    ```csharp\n      // 数据库记录器(具体产品)\n      public class DataBaseLogger : Logger\n      {\n          public void WriteLog()\n          {\n              Console.WriteLine(\"数据库日志记录。\");\n          }\n      }\n      // 文件记录器(具体产品)\n      public class FileLogger : Logger\n      {\n          public void WriteLog()\n          {\n              Console.WriteLine(\"文件日志记录。\");\n          }\n      }\n    ```\n    \n-   Client测试类:\n    \n    ```csharp\n          public static void Main(string[] args)\n          {\n              // 创建数据库工厂实例\n              LoggerFactory loggerFactory = new DataBaseLoggerFactory();\n              // 通过工厂创建具体的产品\n              Logger logger = loggerFactory.CreateLogger();\n              // 具体日志产品打印\n              logger.WriteLog();\n          }\n    ```\n    \n-   **注意:**由于具体工厂类和具体产品类之间的关系为一一对应，有时候为了简化客户端使用，可以对客户端隐藏工厂方法\n    \n    ```csharp\n      public abstract class LoggerFactory\n      {\n          public void WriteLogger()\n          {\n              Logger logger = this.CreateLogger();\n              logger.WriteLog();\n          }\n    \n          public abstract Logger CreateLogger();\n      }\n    ```"
        ]
      },
      {
        "heading": "2.4 优缺点",
        "paragraphs": [
          "-   **优点:**\n    \n    1.  **符合开闭原则:**当在系统中增加新的产品时无须修改抽象工厂和抽象产品提供的接口，只需要添加一个具体工厂和具体产品类即可，\n    2.  **多态性设计：**工厂方法模式可以利用多态性设计，让工厂能够自主确定创建何种对象，且创建该对象的细节完全封装在具体工厂内部。\n-   **缺点:**\n    \n    1.  **系统过于复杂:**当需要添加新的产品时，需要添加新的具体产品类和具体工厂类，类的个数成对增加,增加了系统的复杂性\n    2.  **过于抽象性:**在客户端中均使用了抽象层进行定义，增加了系统的抽象性和理解难度。"
        ]
      },
      {
        "heading": "2.5 使用场景",
        "paragraphs": [
          "客户端不需要知道所需要的对象的类(具体产品类的类名)，可通过配置文件去创建。"
        ]
      },
      {
        "heading": "3.1 概述",
        "paragraphs": [
          "在工厂方法模式中每一个具体工厂只需要生产一种具体产品，但在抽象工厂模式中一个具体工厂可以生产**一组相关的具体产品**，这一组具体产品成为**产品族**，**产品族**的每一个产品都分属于某一个产品**继承等级结构**。",
          "**定义:**提供一个创建一系列相关或者相互依赖对象的接口，而无须指定它们的具体的类。",
          "抽象工厂又称为工厂(Kit)模式，是一种对象创建型模式。"
        ]
      },
      {
        "heading": "3.2 模式结构",
        "paragraphs": [
          "在抽象工厂模式中，每一个具体工厂都提供了多个工厂方法用于生产多种不同类型的产品，这些产品构成一个**产品族**。",
          "1.  **AbstractFactory(抽象工厂):**声明了一组用于**创建一族产品**的方法，每个方法对应一种产品。\n2.  **ConcreteFactory(具体工厂)**:实现抽象工厂中声明的创建产品的方法，生成一组具体产品。\n3.  **AbstractProduct(抽象产品):**它为每种产品声明接口，在抽象产品中声明了产品所具有的业务方法。\n4.  **ConcreteProduct(具体产品):**定义了具体工厂生产的具体产品对象，实现了抽象产品接口中声明的业务方法。",
          "![image-20240603223540388](@img/qyguvicw)"
        ]
      },
      {
        "heading": "3.3 具体实现",
        "paragraphs": [
          "例如公司需要开发一套界面皮肤库，不同的皮肤将提供视觉效果不同的按钮、文本框、组合框等界面元素。例如春天(Spring)提供一套绿色的皮肤，夏天则提供一套浅蓝色的皮肤。示意图如下:",
          "![image-20240603224335867](@img/6bopkzql)",
          "-   **SkinFactory：**界面皮肤工厂接口(抽象工厂)\n    \n    ```csharp\n      // 界面皮肤工厂接口(抽象工厂)\n      public interface SkinFactory\n      {\n          public Button CreateButton();\n          public TextFiled CreateTextFiled();\n          public ComboBox CreateComboBox();\n      }\n    ```\n    \n-   **SpringSkinFactory、SummerSkinFactory:**春天/夏天皮肤工厂(具体工厂)\n    \n    ```csharp\n    // 春天皮肤工厂(具体工厂)\n    public class SpringSkinFactory : SkinFactory\n    {\n       public Button CreateButton()\n       {\n           return new SpringButton();\n       }\n    \n       public ComboBox CreateComboBox()\n       {\n           return new SpringComboBox();\n       }\n    \n       public TextFiled CreateTextFiled()\n       {\n           return new SpringTextFiled();\n       }\n    }\n    // 夏天皮肤工厂(具体工厂)\n    public class SummerSkinFactory : SkinFactory\n    {\n       public Button CreateButton()\n       {\n           return new SummerButton();\n       }\n    \n       public ComboBox CreateComboBox()\n       {\n           return new SummerComboBox();\n       }\n    \n       public TextFiled CreateTextFiled()\n       {\n           return new SummerTextFiled();\n       }\n    }\n    ```\n    \n-   **Button、TextFiled、ComboBox**：按钮/文本框/边框组件(抽象产品)\n    \n    ```csharp\n    public interface Button\n    {\n      public void Display();\n    }\n    \n    public interface TextFiled\n    {\n      public void Display();\n    }\n    \n    public interface ComboBox\n    {\n      public void Display();\n    }\n    ```\n    \n-   **SpringButton、SpringTextField、SpringComboBox、SummerButton、SummerTextField、SummerComboBox**:具体产品类\n    \n    ```csharp\n    public class SpringButton : Button\n    {\n      public void Display()\n      {\n          Console.WriteLine(\"显示浅绿色按钮\");\n      }\n    }\n    \n    public class SpringTextFiled : TextFiled\n    {\n      public void Display()\n      {\n          Console.WriteLine(\"显示浅绿色文本框\");\n      }\n    }\n    \n    public class SpringComboBox : ComboBox\n    {\n      public void Display()\n      {\n          Console.WriteLine(\"显示浅绿色边框组合框\");\n      }\n    }\n    \n    public class SummerButton : Button\n    {\n      public void Display()\n      {\n          Console.WriteLine(\"显示浅蓝色按钮\");\n      }\n    }\n    \n    public class SummerTextFiled : TextFiled\n    {\n      public void Display()\n      {\n          Console.WriteLine(\"显示浅蓝色文本框\");\n      }\n    }\n    \n    public class SummerComboBox : ComboBox\n    {\n      public void Display()\n      {\n          Console.WriteLine(\"显示浅蓝色边框组合框\");\n      }\n    }\n    ```\n    \n-   **Client测试类:**\n    \n    ```csharp\n      public class Client\n      {\n          public static void Main(string[] args)\n          {\n              SkinFactory skinFactory = new SpringSkinFactory();\n              Button button = skinFactory.CreateButton();\n              TextFiled textFiled = skinFactory.CreateTextFiled();\n              ComboBox comboBox = skinFactory.CreateComboBox();\n              button.Display();\n              textFiled.Display();\n              comboBox.Display();\n          }\n      }\n    ```"
        ]
      },
      {
        "heading": "3.4 优缺点",
        "paragraphs": [
          "-   **优点:**\n    1.  符合开闭原则，增加新的产品族时，无须修改系统已有系统\n    2.  方便切换系统的产品族行为\n-   **缺点:**新增新的产品等级需要对原有的系统进行修改，所有的产品族都要进行修改。"
        ]
      },
      {
        "heading": "3.5 使用环境",
        "paragraphs": [
          "1.  用户无须关系对象的创建过程，将对象的创建和使用进行解耦。\n2.  当系统有多个产品族，且每次只使用其中某一个产品族。\n3.  产品等级结构稳定，当设计完成后不需要再向系统添加新的产品等级结构或者删除已有的产品等级结构。"
        ]
      },
      {
        "heading": "四、总结",
        "paragraphs": [
          "在游戏开发中，目前我遇到的大部分都是简单工厂模式，直接去工厂中获得产品。简单工厂模式(添加一个抽象工厂)-> 工厂方法模式（将工厂与产品一一对应扩展到产品族）-> 抽象工厂模式。简单工厂违反了开闭原则，工厂方法虽然符合开闭原则，但是每次添加产品都需要成对添加，会导致系统过于复杂，抽象工厂解决了工厂方法的系统过于复杂，但是当产品等级需要修改时，它又违反了开闭原则，当产品等级修改时，所有的具体产品也都需要随着修改，每次修改就会对系统进行一次大修改，所以每一种工厂模式都有弊端，也有好处，要结合实际去运用它。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-18",
    "tags": [
      "创建型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "单例模式",
    "date": "2024-06-05",
    "cover": "🏗️",
    "excerpt": "一、概述 单例模式是结构最简单的设计模式，其核心结构中只包含一个被称为单例类的特殊类。单例模式是一种创建型设计模式，它保证一个类只有一个实例，并且提供一个全局访问点。单例模式用来解决频繁创建与销毁实例对象问题，当我们控制实例创建个数或复用实...",
    "sections": [
      {
        "heading": "一、概述",
        "paragraphs": [
          "单例模式是结构最简单的设计模式，其核心结构中只包含一个被称为单例类的特殊类。单例模式是一种创建型设计模式，**它保证一个类只有一个实例，并且提供一个全局访问点。**单例模式用来解决**频繁创建与销毁实例对象**问题，当我们控制实例**创建个数或复用实例**，就可以使用单例模式，这样有助于节省系统资源。",
          "**定义:**确保一个类只有一个实例，并且提供一个全局访问点来访问这个唯一实例。"
        ]
      },
      {
        "heading": "二、结构",
        "paragraphs": [
          "单例模式有三个要点:",
          "-   某个类只能有一个实例\n-   必须自行创建这个实例\n-   必须自行向整个系统提供这个实例",
          "**Singleton单例**:在内部实现只生成一个实例，同时它提供一个全局访问点；为了防止外界对其实例化，将其构造函数设计为私有；内部定义一个**Singleton类型**的静态对象，作为外部共享的唯一实例。",
          "![image-20240605221527913](@img/n2yphjc6)"
        ]
      },
      {
        "heading": "三、实现",
        "paragraphs": [
          "-   普通模式的单例模式",
          "```csharp\npublic class Singleton\n{\n    private static readonly object _lock = new object();\n    public static Singleton instance;\n    public static Singleton Instance \n    {  \n        get \n        { \n            lock(_lock)\n            {\n                if (instance == null)\n                {\n                    instance = new Singleton();\n                }\n            }",
          "return instance;\n        } \n    }\n}\npublic class Client\n{\n    public static void Main(string[] args)\n    {\n        Singleton s1 = Singleton.Instance;\n        Singleton s2 = Singleton.Instance;\n        if (s1 == s2) Console.WriteLine(\"Singleton works, both variables contain the same instance.\");\n        else Console.WriteLine(\"Singleton failed, variables contain different instances.\");\n    }\n    // 输出结果为: Singleton works, both variables contain the same instance.\n}\n```",
          "-   Unity基于MonoBehavior的单例模式",
          "```csharp\n  public class SingletonMono : MonoBehaviour\n  {\n      private static SingletonMono instance;\n      public static SingletonMono Instance\n      {\n          get\n          {\n              return instance;\n          }\n      }\n      protected virtual void Awake()\n      {",
          "if (instance != null)\n          {\n              instance = this;\n              DontDestroyOnLoad(gameObject);\n          }\n      }\n  }\n```"
        ]
      },
      {
        "heading": "四、优缺点",
        "paragraphs": [
          "-   **优点:**\n    1.  **方便好用**，单例类提供了对唯一实例的受控访问。\n    2.  节约系统资源，由于系统只存在一个对象，所以当一些需要频繁创建和销毁的对象，可以存放与单例类中。\n-   **缺点:**\n    1.  违反了单一职责，单例模式的职责过重，导致过度依赖单例类。\n    2.  拓展困难，由于单例模式中没有抽象层，因此单例类的扩展有很大的困难。"
        ]
      },
      {
        "heading": "五、适用场景",
        "paragraphs": [
          "1.  系统只需要一个实例，且该实例需要长期使用时，可以使用单例模式，可以避免重复创建单例。\n2.  客户调用类的单个实例只允许使用一个公共访问点，除了该公共访问点，不能通过其他途径访问该实例。",
          "​ 了解过很多讨论和博客，大家对单例模式都是保持一个双刃剑的态度，很多人觉得单例模式职责过于重，会有很高的耦合性，我目前认为单例模式利大于弊。单例模式确实不能泛用，但是对于游戏开发来说，一些比较重要的模块比如AudioManager、SceneManager等都可以采用单例模式实现，因为这些都是在游戏中需要全局调用的。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-19",
    "tags": [
      "创建型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "建造者模式",
    "date": "2024-06-16",
    "cover": "🏗️",
    "excerpt": "一、概念 建造者模式是一种创建型设计模式，它将客户端与包含多个部件的复杂对象的创建过程分离，客户端无须知道复杂对象的内部组成部分和装配方式，只需知道建造者的类型即可。建造者模式关注如何一步一步地创建一个复杂的对象，不同的具体建造者者定义了不...",
    "sections": [
      {
        "heading": "一、概念",
        "paragraphs": [
          "建造者模式是一种创建型设计模式，它将客户端与包含多个部件的复杂对象的创建过程分离，客户端无须知道复杂对象的**内部组成部分**和**装配方式**，只需知道建造者的类型即可。建造者模式关注如何一步一步地创建一个复杂的对象，不同的具体建造者者定义了不同的建造过程，而且具体的建造者相互独立。",
          "**定义:又称生成器**将一个复杂的对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表现。"
        ]
      },
      {
        "heading": "二、模式结构",
        "paragraphs": [
          "**产品(Product)：**表示正在构建的**复杂对象**，它通常由多个部分组成。具体建造者创建该产品的**内部表示**并定义它的**装配过程**。",
          "**抽象建造者(Abstract Builder):**定义了构建产品的抽象接口，包括构建各个部分的方法以及装配过程方法。",
          "**具体建造者(Concrete Builder):**实现了抽象建造者接口，实现了各个部件的**具体构造**和**装配方法**，定义并明确所创建的复杂对象。",
          "**指导者(Director):**负责使用具体建造者来构建产品，它负责安排负责对象的构建次序。",
          "![image-20240616170754882](@img/fay34270)"
        ]
      },
      {
        "heading": "三、具体实现",
        "paragraphs": [
          "使用建造者模式来实现游戏角色的创建，对游戏角色进行设计，其基本结构如下图所示。",
          "![image-20240616171001577](@img/k41v81ir)"
        ]
      },
      {
        "heading": "3.1 角色类(产品类)",
        "paragraphs": [
          "```csharp\npublic class Actor\n{\n    private string type;            // 角色类型\n    private string sex;             // 性别\n    private string face;            // 脸型\n    private string costume;         // 服装\n    private string hairStyle;       // 发型",
          "public void SetType(string type)\n    {\n        this.type = type;\n    }",
          "public void SetSex(string sex)\n    {\n        this.sex = sex;\n    }",
          "public void SetFace(string face)\n    {\n        this.face = face;\n    }",
          "public void SetCostume(string costume)\n    {\n        this.costume = costume;\n    }",
          "public void SetHairStyle(string hairStyle)\n    {\n        this.hairStyle = hairStyle;\n    }",
          "public string getType() { return type; }\n    public string getSex() {  return sex; }\n    public string getFace() { return face; } \n    public string getCostume() {  return costume; }\n    public string getHairStyle() {  return hairStyle; }",
          "}\n```"
        ]
      },
      {
        "heading": "3.2 角色建造者(抽象建造者)",
        "paragraphs": [
          "```csharp\npublic abstract class ActorBuilder\n{\n    protected Actor actor = new Actor();",
          "public abstract void BuildType();\n    public abstract void BuildSex();\n    public abstract void BuildFace();\n    public abstract void BuildCostume();\n    public abstract void BuildHairStyle();",
          "public Actor CreateActor()\n    {\n        return actor;\n    }",
          "}\n```"
        ]
      },
      {
        "heading": "3.3 角色具体建造类(具体建造者)",
        "paragraphs": [
          "```csharp\npublic class HeroBuilder : ActorBuilder\n{\n    public override void BuildCostume()\n    {\n        actor.SetCostume(\"盔甲\");\n    }",
          "public override void BuildFace()\n    {\n        actor.SetFace(\"飘逸\");\n    }",
          "public override void BuildHairStyle()\n    {\n        actor.SetHairStyle(\"飘逸\");\n    }",
          "public override void BuildSex()\n    {\n        actor.SetSex(\"男\");\n    }",
          "public override void BuildType()\n    {\n        actor.SetType(\"英雄\");\n    }\n}",
          "public class AngleBuilder : ActorBuilder\n{\n    public override void BuildCostume()\n    {\n        actor.SetCostume(\"白裙\");\n    }",
          "public override void BuildFace()\n    {\n        actor.SetFace(\"漂亮\");\n    }",
          "public override void BuildHairStyle()\n    {\n        actor.SetHairStyle(\"披肩长发\");\n    }",
          "public override void BuildSex()\n    {\n        actor.SetSex(\"女\");\n    }",
          "public override void BuildType()\n    {\n        actor.SetType(\"天使\");\n    }\n}",
          "public class DevilBuilder : ActorBuilder\n{\n    public override void BuildCostume()\n    {\n        actor.SetCostume(\"黑衣\");\n    }",
          "public override void BuildFace()\n    {\n        actor.SetFace(\"丑陋\");\n    }",
          "public override void BuildHairStyle()\n    {\n        actor.SetHairStyle(\"光头\");\n    }",
          "public override void BuildSex()\n    {\n        actor.SetSex(\"妖\");\n    }",
          "public override void BuildType()\n    {\n        actor.SetType(\"恶魔\");\n    }\n}\n```"
        ]
      },
      {
        "heading": "3.4 角色控制器(指挥者)",
        "paragraphs": [
          "```csharp\n    public class ActorController\n    {\n        public Actor construct(ActorBuilder actorBuilder)\n        {\n            Actor actor;\n            actorBuilder.BuildType();\n            actorBuilder.BuildSex();\n            actorBuilder.BuildFace();\n            actorBuilder.BuildCostume();\n            actorBuilder.BuildHairStyle();\n            actor = actorBuilder.CreateActor();\n            return actor;\n        }\n    }\n```"
        ]
      },
      {
        "heading": "3.5 客户测试类",
        "paragraphs": [
          "```csharp\npublic class Client\n{\n    static void Main(string[] args)\n    {\n        ActorBuilder builder = new DevilBuilder();\n        ActorController actorController = new ActorController();\n        Actor actor = actorController.construct(builder);\n        Console.WriteLine(actor.GetType() + \"的外观: \");\n        Console.WriteLine(\"性别: \" + actor.getSex());\n        Console.WriteLine(\"面容: \" + actor.getFace());\n        Console.WriteLine(\"服装: \" + actor.getCostume());\n        Console.WriteLine(\"发型: \" + actor.getHairStyle());",
          "}\n}\n```"
        ]
      },
      {
        "heading": "四、优缺点",
        "paragraphs": [
          "-   **优点:**\n    1.  分离构建过程和表示，使构建过程更加灵活，可以创建不同的表示。\n    2.  可以更好地控制构建过程，隐藏具体地构建细节。\n    3.  每个具体构建者都相对独立，可以在不同地构建过程中重复使用相同地建造者。\n-   **缺点:**\n    1.  如果产品地内部复杂，可能会导致需要定义很多具体构造者来实现这种变化，会导致系统变得很庞大。\n    2.  当产品属性比较少，建造者模式可能会导致代码冗余。"
        ]
      },
      {
        "heading": "五、 使用环境",
        "paragraphs": [
          "-   **结构复杂**：当对象具有非常复杂的内部结构，包含许多属性时，建造者模式适用。\n-   **分离创建和使用**：如果想将复杂对象的创建和使用分离，建造者模式是一个不错的选择。\n-   **多步骤构建**：当创建对象需要多个步骤时，建造者模式非常适合。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-20",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "Dictionary底层源码剖析",
    "date": "2024-06-17",
    "cover": "🎮",
    "excerpt": "Dictionary字典型数据结构是以关键字Key值和Value值进行一一映射，Key的类型并没有做任何限制，可以是整数，也可以是字符串，甚至是实例对象。Dictionary的实验原理，有两个关键算法，Hash算法和解决Hash冲突的拉链法...",
    "sections": [
      {
        "heading": "Dictionary底层源码剖析",
        "paragraphs": [
          "Dictionary字典型数据结构是以关键字**Key值**和**Value值**进行一一映射，Key的类型并没有做任何限制，可以是整数，也可以是字符串，甚至是实例对象。Dictionary的实验原理，有两个关键算法，**Hash算法**和**解决Hash冲突的拉链法**，key值和value值的映射关系就是通过Hash函数来建立的。",
          "[Dictionary源码](https://referencesource.microsoft.com/#mscorlib/system/collections/generic/dictionary.cs)"
        ]
      },
      {
        "heading": "1.1 Hash函数",
        "paragraphs": [
          "Dictionary会针对每个Key值加入容器的元素都进行一次Hash(哈希)运算操作，从而找到自己存放的位置。Hash函数可以有很多种算法，最简单的可以认为是**取余操作**。",
          "对于实例对象和字符串来说，它们没有直接的数字作为hash标准，因此它们需要通过**内存地址**计算一个**Hash值**，计算这个内存对象的函数就叫**HashCode**，它是基于内存地址来计算得到的结果，我们也可以通过重载HashCode()来设计我们自定义的Hash值计算方法。"
        ]
      },
      {
        "heading": "1.2 Hash冲突",
        "paragraphs": [
          "当不同的Key值进行Hash计算后，得到的结果可能是同一Hash地址。HashFunc(key1) == HashFunc(key2),这种现象被成为Hash冲突。在处理Hash冲突的方法中，有开放寻址法、拉链法、再Hash法等，而Dictionary使用的是拉链法(又称链地址法)。",
          "**拉链法的原理**: 将所有具有**相同哈希值**的元素链接在一起，形成一个链表。当发生冲突时，新的元素会被添加到**链表的末尾**，链表的每一个元素都包含一个指向实际数据的指针和一个指向下一个元素的指针。",
          "![image-20240616222832877](@img/6zny13hm)"
        ]
      },
      {
        "heading": "2.1 变量定义",
        "paragraphs": [
          "-   **Dictionary：**底层的数据结构为哈希表，而哈希表的数组结构为数组。",
          "```csharp\npublic class Dictionary<TKey, TValue> : IDictionary<TKey, TValue>, IDictionary, IReadOnlyDictionary<TKey, TValue>,\n    ISerializable, IDeserializationCallback\n{",
          "private struct Entry\n    {\n        public uint hashCode;   // 哈希值\n        public int next;        // 下一个元素的下标索引\n        public TKey key;        // 存放元素的键\n        public TValue value;    // 存放元素的值\n    }",
          "private int[] buckets;      // 桶，存放的数值为entries数组元素的下标索引\n    private Entry[] entries;    // 桶对应的链表\n    private int count;          // 元素个数\n    private int version;        // 版本号,防止迭代的时候集合被修改\n    private int freeList;       // 桶对应数组中被删除Entry的下标索引(单链表)\n    private int freeCount;      // 记录被删除的Entry的数量\n    private IEqualityComparer<TKey> comparer;   // 比较器\n    private KeyCollection keys;                 // 存放key的集合\n    private ValueCollection values;             // 存放value的集合\n    private Object _syncRoot;                   \n}\n```"
        ]
      },
      {
        "heading": "2.2 Add接口",
        "paragraphs": [
          "```csharp\npublic void Add(TKey key, TValue value)\n{\n    Insert(key, value, true);\n}",
          "private void Initialize(int capacity)\n{\n    int size = HashHelpers.GetPrime(capacity);              // size大小\n    buckets = new int[size];                                // 创建桶数组\n    for (int i = 0; i<buckets.Length; i++) buckets[i] = -1;  // buckets默认全为-1\n    entries = new Entry[size];                              // 创建Entry实体数组\n    freeList = -1;                                          // freeList默认为-1\n}",
          "private void Insert(TKey key, TValue value, bool add)\n{\n    if( key == null) \n    {\n        ThrowHelper.ThrowArgumentNullException(ExceptionArgument.key);\n    }",
          "if (buckets == null) Initialize(0); // 对数据结构进行构造\n    // 对Key进行哈希操作\n    int hashCode = comparer.GetHashCode(key) & 0x7FFFFFFF;  \n    int targetBucket = hashCode % buckets.Length;",
          "// 通过地址找到桶对应的链表,\n    for (int i = buckets[targetBucket]; i>= 0; i = entries[i].next) \n    {\n        // 如果存在则修改\n        if (entries[i].hashCode == hashCode && comparer.Equals(entries[i].key, key)) \n        {\n            // 添加相同的键值对，会抛出异常\n            if (add) \n            {\n                ThrowHelper.ThrowArgumentException(ExceptionResource.Argument_AddingDuplicate);\n            }\n            entries[i].value = value;\n            version++;\n            return;\n        }\n    }\n    // 桶的index\n    int index;\n    // 如果被删除剩余数量足够\n    if (freeCount > 0) \n    {\n        index = freeList;\n        // freeList等于删除单链表\n        freeList = entries[index].next;\n        freeCount--;\n    }\n    else \n    {\n        // 被删除数量不足够，判断数组数量是否已满\n        if (count == entries.Length)\n        {\n            // 扩容\n            Resize();\n            // 重新判断哈希值\n            targetBucket = hashCode % buckets.Length;\n        }\n        // index等于count值\n        index = count;\n        count++;\n    }\n    // 进行赋值操作\n    entries[index].hashCode = hashCode;\n    entries[index].next = buckets[targetBucket];\n    entries[index].key = key;\n    entries[index].value = value;\n    buckets[targetBucket] = index;\n    version++;\n}\n```",
          "Add接口其实就是Insert的代理, `Insert(key, value, true)`",
          "在加入数据前，首先需要对数据结构进行构造，其代码如下:",
          "```csharp\n if (buckets == null) Initialize(0); // 对数据结构进行构造",
          "private void Initialize(int capacity)\n{\n    int size = HashHelpers.GetPrime(capacity);              // size大小\n    buckets = new int[size];                                // 创建桶数组\n    for (int i = 0; i<buckets.Length; i++) buckets[i] = -1;  // buckets默认全为-1\n    entries = new Entry[size];                              // 创建Entry实体数组\n    freeList = -1;                                          // freeList默认为-1\n}",
          "public class HashHelpers\n{\n    public static readonly int[] primes = {\n        3, 7, 11, 17, 23, 29, 37, 47, 59, 71, 89, 107, 131, 163, 197, 239, \n        293, 353, 431, 521, 631, 761, 919,\n        1103, 1327, 1597, 1931, 2333, 2801, 3371, 4049, 4861, 5839, 7013, \n        8419, 10103, 12143, 14591,\n        17519, 21023, 25229, 30293, 36353, 43627, 52361, 62851, 75431, 90523, \n        108631, 130363, 156437,\n        187751, 225307, 270371, 324449, 389357, 467237, 560689, 672827, \n        807403, 968897, 1162687, 1395263,\n        1674319, 2009191, 2411033, 2893249, 3471899, 4166287, 4999559, 5999471, \n        7199369};",
          "public static int GetPrime(int min)\n    {\n        if (min<0)\n            throw new ArgumentException(\n                Environment.GetResourceString(\"Arg_HTCapacityOverflow\"));\n        Contract.EndContractBlock();\n        // 找到大于需要数量的最小质数\n        for (int i = 0; i<primes.Length; i++)\n        {\n            int prime = primes[i];\n            if (prime>= min) return prime;\n        }",
          "// 如果在我们的预定义表之外，则做硬计算\n        for (int i = (min | 1); i<Int32.MaxValue;i+=2)\n        {\n            if (IsPrime(i) && ((i - 1) % Hashtable.HashPrime != 0))\n                return i;\n        }\n        return min;\n    }",
          "// 返回要增长到的Hash表的大小\n    public static int ExpandPrime(int oldSize)\n    {\n        int newSize = 2 * oldSize;",
          "// 在遇到容量溢出之前，允许Hash表增长到最大可能的大小（约2G个元素）\n        // 请注意，即使（item.Length）由于（uint）强制转换而溢出，此检查仍然有效\n        if ((uint)newSize>MaxPrimeArrayLength && MaxPrimeArrayLength>oldSize)\n        {\n            Contract.Assert( MaxPrimeArrayLength == GetPrime(MaxPrimeArrayLength),\n                \"Invalid MaxPrimeArrayLength\");\n            return MaxPrimeArrayLength;\n        }",
          "return GetPrime(newSize);\n    }\n```",
          "初始化数组大小时,会通过HashHelper类的GetPrime()函数，返回一个需要的size最小质数值。",
          "**GetPrime()**:表示当需要的数量小于primes某个单元格的数字时返回该数字, 即大于需要数量的primes数组中的最小质数。",
          "**ExpandPrimes():**数组扩容, 当前容量的2倍的primes最小质数值。即3->7->17->37(大于34的最小质数)->89(大于74的最小质数)->...",
          "初始化数组后，会对关键字Key做Hash操作，从而获得地址索引",
          "```csharp\n    // 对Key进行哈希操作\n    int hashCode = comparer.GetHashCode(key) & 0x7FFFFFFF;  \n    int targetBucket = hashCode % buckets.Length;\n```",
          "当调用函数获得hash值后，还对hash地址进行取余操作，以确保索引地址落在Dictionary数组长度范围内，而不会溢出。",
          "接着在对指定数组进行单元格内的链表执行遍历操作，如果找到相同的键值对则抛出异常，然后在进行赋值操作，赋值操作会先判断之前是否有释放的entry，如果有的话对之前的entry进行赋值，如果没有则判断当前容量是否足够，如果不够则进行扩容操作。扩容操作代码如下:",
          "```csharp\n        private void Resize() \n        {\n            // 新size为ExpandPrime(count)\n            Resize(HashHelpers.ExpandPrime(count), false);\n        }",
          "private void Resize(int newSize, bool forceNewHashCodes) \n        {\n            Contract.Assert(newSize >= entries.Length);\n            int[] newBuckets = new int[newSize];    // 重建桶\n            for (int i = 0; i < newBuckets.Length; i++) newBuckets[i] = -1; // 初始化桶",
          "Entry[] newEntries = new Entry[newSize]; \n            Array.Copy(entries, 0, newEntries, 0, count); // 将之前的元素拷贝到新数组中\n            if(forceNewHashCodes) // 是否强制重算HashCode值\n            {\n                for (int i = 0; i < count; i++) \n                {\n                    if(newEntries[i].hashCode != -1) \n                    {\n                        newEntries[i].hashCode = (comparer.GetHashCode(newEntries[i].key) & 0x7FFFFFFF);\n                    }\n                }\n            }\n            // 重置桶\n            for (int i = 0; i < count; i++) \n            {\n                if (newEntries[i].hashCode >= 0) \n                {\n                    int bucket = newEntries[i].hashCode % newSize;\n                    newEntries[i].next = newBuckets[bucket];\n                    newBuckets[bucket] = i;\n                }\n            }\n            buckets = newBuckets;\n            entries = newEntries;\n        }\n```"
        ]
      },
      {
        "heading": "2.3 Remove接口",
        "paragraphs": [
          "```csharp\npublic bool Remove(TKey key)\n{\n    if(key == null) \n    {\n        ThrowHelper.ThrowArgumentNullException(ExceptionArgument.key);\n    }",
          "if (buckets != null) \n    {\n        int hashCode = comparer.GetHashCode(key) & 0x7FFFFFFF;\n        int bucket = hashCode % buckets.Length;\n        int last = -1;\n        for (int i = buckets[bucket]; i>= 0; last = i, i = entries[i].next) {\n            if (entries[i].hashCode == hashCode && comparer.Equals(entries[i].key, key))\n            {\n                if (last<0) \n                {\n                    buckets[bucket] = entries[i].next;\n                }\n                else \n                {\n                    // 如果删除的元素在链表中间,上一个元素和下一个元素相连，防止单链表中断\n                    entries[last].next = entries[i].next;\n                }\n                entries[i].hashCode = -1;\n                entries[i].next = freeList; // 删除的链表下标\n                // 赋默认值\n                entries[i].key = default(TKey);\n                entries[i].value = default(TValue);\n                freeList = i;\n                freeCount++;\n                version++;\n                return true;\n            }\n        }\n    }\n    return false;\n}\n```",
          "Remove接口相对于Add接口简单一点，先使用Hash函数获得Hash值，再执行余操作，确定索引值落在数组范围内，从Hash索引地址开始查找链表中的值，查找冲突链表中元素的Key值是否与需要移除的Key值相同，相同则进行删除操作。"
        ]
      },
      {
        "heading": "2.4 ContainKey、TryGetValue接口",
        "paragraphs": [
          "```csharp\npublic bool ContainsKey(TKey key)\n{\n    return FindEntry(key)>= 0;\n}",
          "public bool TryGetValue(TKey key, out TValue value)\n{\n    int i = FindEntry(key);\n    if (i>= 0) {\n        value = entries[i].value;\n        return true;\n    }\n    value = default(TValue);\n    return false;\n}",
          "private int FindEntry(TKey key)\n{\n    if( key == null) {\n        ThrowHelper.ThrowArgumentNullException(ExceptionArgument.key);\n    }",
          "if (buckets != null) {\n        int hashCode = comparer.GetHashCode(key) & 0x7FFFFFFF;\n        for (int i = buckets[hashCode % buckets.Length]; i>= 0; i = entries[i].next) {\n            if (entries[i].hashCode == hashCode && comparer.Equals(entries[i].key,key)) return i;\n        }\n    }\n    return -1;\n}\n```",
          "两者主要都是使用FindEntry()函数，使用Key值得到的Hash值地址开始查找，查看所有冲突链表中是否有与Key值相同的值，若找到，即刻返回该索引地址。"
        ]
      },
      {
        "heading": "三、总结",
        "paragraphs": [
          "从源码剖析来看，Hash冲突的拉链法贯穿了整个底层数据结构。因此Hash函数是关键，Hash函数的好坏直接决定了效率的高低。Hash函数源码就不在这解释了，因为我看不懂😂，",
          "了解了Dictionary的内部构造和运作机制，可以知道它是有数组构成，并由Hash函数完成地址构建，并由拉链法解析哈希冲突。",
          "从效率上看，同List一样，最好在实例化对象，即新建时，确定大致数量，这样会使得内存分配次数减少，另外，使用数值方式作为键值比使用类实例的方式更高效，因为类对象实例的Hash值通常都由内存地址再计算得到。从内存操作上看，其大小以3→7→17→37→…的速度（每次增加2倍多）增长，删除时，并不缩减内存。",
          "Dictionary也是线性不安全的，因此在多线程访问的时候，需要自行加lock处理。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-21",
    "tags": [
      "创建型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "原型模式",
    "date": "2024-06-19",
    "cover": "🏗️",
    "excerpt": "一、概述 原型模式是一种特殊的创建型模式(对象创建型模式)，它通过复制一个已有对象来获取更多相同或者相似的对象。原型模式可以提高相同类型对象的创建效率，简化创建过程。其中原型模式又分为浅拷贝和深拷贝。浅拷贝是指复制引用但不复制引用的对象，而...",
    "sections": [
      {
        "heading": "一、概述",
        "paragraphs": [
          "原型模式是一种特殊的创建型模式(**对象创建型模式**)，它通过复制一个已有对象来获取更多相同或者相似的对象。原型模式可以提高相同类型对象的创建效率，简化创建过程。其中原型模式又分为**浅拷贝和深拷贝**。浅拷贝是指复制引用但不复制引用的对象，而深拷贝复制的引用和引用对象。",
          "**定义:**使用原型实例指定待创建对象的类型，并且通过复制这个原型来创建新的对象。"
        ]
      },
      {
        "heading": "二、模式结构",
        "paragraphs": [
          "-   **Prototype(抽象原型类):**它声明了克隆方法的接口，是所有具体原型类的公共父类，它可以是抽象类也可以是接口，甚至还可以是具体实现类。\n    \n-   **ConcretePrototype(具体原型类):**它实现抽象原型类中声明的克隆方法，在克隆方法中返回自己的一个克隆对象。\n    \n-   **Client类:**让一个原型对象克隆自身从而创建一个新的对象。\n    \n    ![image-20240617231811026](@img/pwahk86m)"
        ]
      },
      {
        "heading": "三、具体实现",
        "paragraphs": [
          "以简历为例，复制多份简历，使用原型模式来实现，由于C#中提供了ICloneable接口(抽象原型类)，所有具体原型类实现IClonable接口。"
        ]
      },
      {
        "heading": "3.1 浅拷贝",
        "paragraphs": [
          "**浅拷贝:**被复制对象的所有变量都含有与原来的对象相同的值，而所有的对其他对象的引用都仍然指向原来的对象, 某个对象修改，所有的对象都会随之一起修改。",
          "-   Resume(具体原型类)：简历类",
          "```csharp\npublic class WorkExperience\n{\n    private string _workDate;\n    public string WorkDate { \n        get \n        { \n            return _workDate; \n        }\n        set\n        {\n            _workDate = value;\n        }\n    }\n    private string _company;\n    public string Company\n    {\n        get\n        {\n            return _company;\n        }\n        set\n        {\n            _company = value;\n        }\n    }\n}",
          "public class Resume : ICloneable\n{\n    private string _name;\n    private string _sex;\n    private string _age;\n    private WorkExperience workExperience;",
          "public Resume(string name)\n    {\n        _name = name;\n        workExperience = new WorkExperience();\n    }",
          "// 设置个人信息\n    public void SetPersonalInfo(string sex, string age)\n    {\n        _sex = sex;\n        _age = age;\n    }\n    // 设置工作经历\n    public void SetWorkExperience(string workData, string company)\n    {\n        workExperience.WorkDate = workData;\n        workExperience.Company = company;\n    }\n    // 显示\n    public void Display()\n    {\n        Console.WriteLine(\"{0} {1} {2}\", _name, _sex, _age);\n        Console.WriteLine(\"工作经历: {0} {1}\", workExperience.WorkDate, workExperience.Company);\n    }",
          "public object Clone()\n    {\n        return (Object)MemberwiseClone();\n    }\n}\n```",
          "-   Client类\n    \n    ```csharp\n    Resume resume = new Resume(\"lwy\");\n    resume.SetPersonalInfo(\"男\", \"23\");\n    resume.SetWorkExperience(\"2023-2024\", \"xx公司\");\n    \n    Resume resume1 = (Resume)resume.Clone();\n    resume1.SetWorkExperience(\"2022-2023\", \"yy企业\");\n    \n    Resume resume2 = (Resume)resume.Clone();\n    resume2.SetPersonalInfo(\"男\", \"24\");\n    \n    resume.Display();\n    resume1.Display();\n    resume2.Display();\n    \n    /*\n    lwy 男 23\n    工作经历: 2022-2023 yy企业\n    lwy 男 23\n    工作经历: 2022-2023 yy企业\n    lwy 男 24\n    工作经历: 2022-2023 yy企业\n    */\n    ```",
          "string虽然是一种引用类型，但它属于拥有值类型特点的特殊应用类型, MemberwiseClone()**方法是这样，如果字段是值类型的，则对该字段执行逐位复制，如果字段是引用类型，则复制引用但不复制引用的对象；因此，原始对象及其复本引用同一对象**。"
        ]
      },
      {
        "heading": "3.2 深拷贝",
        "paragraphs": [
          "**深拷贝:**深复制把引用对象的变量指向复制过的新对象，而不是原有的被引用的对象,每个对象都独立存在。",
          "-   Resume(具体原型类)：简历类",
          "```csharp\npublic class WorkExperience : ICloneable\n{\n    private string _workDate;\n    public string WorkDate { \n        get \n        { \n            return _workDate; \n        }\n        set\n        {\n            _workDate = value;\n        }\n    }\n    private string _company;\n    public string Company\n    {\n        get\n        {\n            return _company;\n        }\n        set\n        {\n            _company = value;\n        }\n    }",
          "public object Clone()\n    {\n        return (Object) this.MemberwiseClone();\n    }\n}",
          "public class Resume : ICloneable\n{\n    private string _name;\n    private string _sex;\n    private string _age;\n    private WorkExperience workExperience;",
          "public Resume(string name)\n    {\n        _name = name;\n        workExperience = new WorkExperience();\n    }",
          "// 设置个人信息\n    public void SetPersonalInfo(string sex, string age)\n    {\n        _sex = sex;\n        _age = age;\n    }\n    // 设置工作经历\n    public void SetWorkExperience(string workData, string company)\n    {\n        workExperience.WorkDate = workData;\n        workExperience.Company = company;\n    }\n    // 显示\n    public void Display()\n    {\n        Console.WriteLine(\"{0} {1} {2}\", _name, _sex, _age);\n        Console.WriteLine(\"工作经历: {0} {1}\", workExperience.WorkDate, workExperience.Company);\n    }",
          "public Object Clone()\n    {\n        Resume obj = new Resume(_name);\n        obj.workExperience = (WorkExperience)workExperience.Clone();\n        obj._sex = _sex;\n        obj._age = _age;\n        return obj;\n    }\n}\n```",
          "-   Client类\n    \n    ```csharp\n    Resume resume = new Resume(\"lwy\");\n    resume.SetPersonalInfo(\"男\", \"23\");\n    resume.SetWorkExperience(\"2023-2024\", \"xx公司\");\n    \n    Resume resume1 = (Resume)resume.Clone();\n    resume1.SetWorkExperience(\"2022-2023\", \"yy企业\");\n    \n    Resume resume2 = (Resume)resume.Clone();\n    resume2.SetPersonalInfo(\"男\", \"24\");\n    \n    resume.Display();\n    resume1.Display();\n    resume2.Display();\n    \n    /*\n    lwy 男 23\n    工作经历: 2023-2024 xx公司\n    lwy 男 23\n    工作经历: 2022-2023 yy企业\n    lwy 男 24\n    工作经历: 2023-2024 xx公司\n    */\n    ```"
        ]
      },
      {
        "heading": "四、优缺点",
        "paragraphs": [
          "-   **优点:**\n    1.  **性能高:**使用原型模式复用现有对象，比**使用构造函数重新创建对象性能更高**(直接在内存中拷贝，构造函数是不会执行的)，适用于**类实例对象**开销较大的情况。\n    2.  **流程简单:**原型模式可以简化创建过程，直接修改现有对象实例的值，达到复用的目的。\n-   **缺点:**\n    1.  **实现复杂:**需要覆盖clone方法，且需注意深拷贝和浅拷贝的风险，实现深拷贝需要将每一层的对象的类都支持深拷贝。\n    2.  **不符合开闭原则**:因为每一个类配备一个克隆的方法，且该克隆方法位于类内部，当对已有的类进行修改时需要修改源代码。"
        ]
      },
      {
        "heading": "五、适用环境",
        "paragraphs": [
          "1.  当需要在运行是动态地创建新对象，且不必知道它们确切类型时，可以采用原型模式。\n2.  当类初始化时消耗过多资源，或者构造函数复杂，或者需要避免创建新对象时所需的构造函数调用开销，都可以考虑使用原型模式。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-22",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "浮点数的精度问题",
    "date": "2024-06-23",
    "cover": "🎮",
    "excerpt": "每个人在写关于浮点数判断大小的时候都会看到a - b &lt; 1e8来确定a和b的数值是否相等，为什么不能适用a == b来直接判断呢？ 这个就涉及到了浮点数的精度问题。 下面一段代码 #include&lt;iostream&gt; u...",
    "sections": [
      {
        "heading": "浮点数的精度问题",
        "paragraphs": [
          "每个人在写关于浮点数判断大小的时候都会看到`a - b < 1e8`来确定a和b的数值是否相等，为什么不能适用`a == b`来直接判断呢？ 这个就涉及到了浮点数的精度问题。",
          "下面一段代码",
          "```c\n#include<iostream>\nusing namespace std;\nint main(){\n    float a = 0.1;\n    float sum = 0;\n    for (int i = 0; i < 3; i ++){\n        sum = a + sum;\n    }\n    printf (\"%0.8f\", sum);\n    return 0;\n}",
          "// 输出的值为0.30000001\n```",
          "最后输出的值为`0.30000001`,因为在浮点型的数据做运算的时候，得到的数据都不会精确。"
        ]
      },
      {
        "heading": "一、浮点数的二进制存储方法",
        "paragraphs": [
          "[IEEE二进制浮点数算术标准](https://zh.wikipedia.org/wiki/IEEE_754#32%E4%BD%8D%E5%96%AE%E7%B2%BE%E5%BA%A6)中，单精度float类型使用**32比特存储(32位占4字节)**，其中1位为表符号，8位表示指数，23位表示尾数；双精度double类型使用**64比特存储(64位占8字节)**，1位符号位，11位指数位，52位尾数位。",
          "计算机只能识别0和1，所以在浮点数中，不管是整数还是小数，在计算机中都以二进制方式来存储在内存中，其中整数部分采用**\"除以2取余法\"**从十进制数转换成二进制，而小数部分则使用**\"乘2取整法\"**得到二进制数。以120.5为例，120.5(10)中整数表示`1111000`,而小数表示`1`,即1.1110001×2^6。",
          "![image-20240622212513410](@img/uftrv5py)",
          "浮点数的存储一共分为三个部分:",
          "1.  **符号位(sign):**0表示正数，1表示负数。\n2.  **指数位(exponent):**存储科学计数法的指数部分。\n3.  **尾数部分(fraction):**表示科学技术法的尾数部分。",
          "![image-20240622213015545](@img/zb72v5r1)",
          "任何一个浮点数可以这样表示",
          "​ `F = （-1 ^ s) × (1.M) × (2 ^ e)`",
          "符号位即为`s`,尾数部位即为`M`,指数部位为`e`。",
          "由此可以得出，结论二进制小数的科学计数法表示上看，可以知道float的精度为 1 / (2 ^ 23)，double的精度为1 / (2 ^ 52) 。"
        ]
      },
      {
        "heading": "二、精度丢失",
        "paragraphs": [
          "浮点数9.625可以用2进制表示为1.1110001×2^6，0.625可以精确的表示成`101`,那如果以198903.19为例，0.19则表示`0011000010100011...`,它转换为二进制是无穷尽的。而198903二进制为`110000100011110111`，那么表示二进制则为`(-1^0)×1.100 001 000 111 101 110 011 000 010 100 011×(2^17)`。在计算中存储时就会**溢出，从而丢失精度**。",
          "在实际开发中我们遇到常见的精度问题:",
          "-   **数值比较不相等:**\n    \n    比如在Unity的Update函数中，如果我们需要设计一个在0.23秒执行某个逻辑，然后在0.43秒在做另外一个逻辑时，如果我们使用`==`那么就会遇到在0.23秒或者0.43秒并不会执行逻辑。我们只能用`>`或者`<`来解决该问题的出现。或者使用abs(X - 0.23) < 0.000001来判断`x == 0.23`。\n    \n-   **不同设备的计算结果不同：**\n    \n    不同平台上的浮点数计算也有误差，由于设备上CPU存储器和操作系统架构不同，因此会导致相同的公式在不同的设备上计算出的结果有所差异。"
        ]
      },
      {
        "heading": "三、精度丢失的解决办法",
        "paragraphs": [
          "-   **使用int或long来代替浮点数(策划数值表体现):**浮点数和整数的计算方式是一样的，小数点部分会造成精度问题，不如通过将浮点数乘10的次幂来得到整数，在用整数进行运算，根据需要的精度用整数表示，如保留3位精度就乘以10000。\n-   **用定点数保持一致性：**定点数是把整数部分和小数部分拆分开来，都以整数的形式表示，这样计算和表示都是用整数的方式，就不会产生误差，C#有一种decimal的128位的数据类型，用于表示高精度的实数，其内部就是定点数的实现方式(注意:decimal不能与float随意互换)，也可以自己实现一个定点数逻辑。\n-   **用字符串代替浮点数:**在学校写算法题时基本上都会遇到过字符串来解决上百位的数字的高精度运算，字符串形式存储数字，这样的计算方式不用担心越界问题，但是CPU和内存的消耗比较大，只能做少量高精度的计算。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-23",
    "tags": [
      "结构型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "适配器和桥接模式",
    "date": "2024-06-28",
    "cover": "🏗️",
    "excerpt": "一、适配器模式 1.1 概述 适配器模式充当两个不兼容接口之间的桥梁，属于结构型模式，它通过中间件（适配器）将一个类的接口转换为客户期望的另一个接口。如生活中的充电器，生活用电的电压是220V但是手机的工作电压没那么高，于是就有了充电器(变...",
    "sections": [
      {
        "heading": "1.1 概述",
        "paragraphs": [
          "适配器模式充当**两个不兼容接口之间的桥梁**，属于结构型模式，它通过中间件（适配器）将一个类的接口转换为客户期望的另一个接口。如生活中的充电器，生活用电的电压是`220V`但是手机的工作电压没那么高，于是就有了`充电器(变压器)`让手机能在`220V`电压下充电，在这电源充电器就充当了一个**适配器**的角色。",
          "**定义：**将一个类的接口转换为客户希望的另一个接口，适配器让那些**接口不兼容**的类可以一起工作。",
          "适配器模式其中包括了类适配器和对象适配器。在对象适配器模式中，适配器与适配者之间是**关联关系**；在类适配器模式中，适配器和适配者之间是**继承（或实现）关系**。"
        ]
      },
      {
        "heading": "1.2 模式结构",
        "paragraphs": [
          "适配器模式包括对象适配器和类适配器，其中包括3个角色:",
          "1.  **Target(目标抽象类)：**目标抽象**定义客户所需接口**，可以是一个抽象类或者接口，也可以是一个具体类。\n2.  **Adapter(适配器类)：**它可以调用另一个接口，作为一个**转换器**，对Adaptee（适配者类）和Target（目标抽象类）进行适配。适配者是适配模式的核心，**在类适配器中，它通过实现`Target接口`并继承`Adaptee类`来使二者产生联系,在对象适配器中，它通过继承`Target接口`并关联一个`Adaptee对象`使二者产生联系。**\n3.  **Adaptee(适配者类)：**即被适配的角色，定义了一个**存在的接口，这个接口需要适配**，适配者类一般是一个具体类。包含了客户希望使用的业务方法，在某些情况下甚至没有适配者类的源代码。",
          "**类适配器模式结构图:**",
          "![image-20240623222808013](@img/cdnr4oi1)",
          "**对象适配器模式结构图:**",
          "![image-20240623222842575](@img/mobd17az)"
        ]
      },
      {
        "heading": "1.3 实现与应用实例",
        "paragraphs": [
          "**类适配器模式:**",
          "```csharp\n    public class Adapter : Adaptee, Target\n    {\n        public void request()\n        {\n            this.specificRequest();\n        }\n    }\n```",
          "**对象适配器模式:**",
          "```csharp\n    public class Adapter : Target\n    {\n        private Adaptee adaptee;",
          "public Adapter()\n        {\n            adaptee = new Adaptee();\n        }",
          "public void request()\n        {\n            adaptee.specificRequest();\n        }\n    }\n```",
          "以国家之前的电压为例，中国电网的电压是以`220V`输出的，而美国电网的电压是以`110V`输出的，现在要将美国电压转接（适配）到中国使用。、",
          "-   **类适配器：**\n    \n    ```csharp\n    // 客户期望的接口: 220V电压输出\n    public interface Target\n    {\n      public int chargeBy220V();\n    }\n    // 现有接口:只能通过110V电压充电\n    public interface Adaptee\n    {\n      public int chargeBy110V();\n    }\n    // 现有接口的具体实现类，美国供电器:通过110V电压供电\n    public class AmericanCharger : Adaptee\n    {\n      public int chargeBy110V()\n      {\n          Console.WriteLine(\"美国供电器，正在以110V电压为您充电\");\n          return 110;\n      }\n    }\n    // 类适配器，通过继承现有接口来完成对现有接口的扩展\n    public class Adpater : AmericanCharger ,Target\n    {\n      public int chargeBy220V()\n      {\n          int americanCharger = chargeBy110V();\n          int charger = americanCharger + 110;\n          Console.WriteLine(\"再加110V，达到220V\");\n          return charger;\n      }\n    }\n    \n    public class Client\n    {\n      public void main(string[] args)\n      {\n          Adpater adapter = new Adpater();\n          adapter.chargeBy220V();\n      }\n    \n      /*\n       * 美国供电器，正在以110V电压为您充电\n       * 再加110V，达到220V\n       */\n    }\n    ```\n    \n-   **对象适配器模式：**\n    \n    ```csharp\n    namespace Test.dApadters\n    {\n      public interface ATarget\n      {\n          public int chargeBy220V();\n      }\n      public interface BTarget\n      {\n          public int chargeBy110V();\n      }\n    \n      public class AmericanCharger : BTarget\n      {\n          public int chargeBy110V()\n          {\n              Console.WriteLine(\"美国充电器, 正在通过110V电压为您充电\");\n              return 110;\n          }\n      }\n    \n      public class ChinaCharger : ATarget\n      {\n          public int chargeBy220V()\n          {\n              Console.WriteLine(\"中国充电器, 正在通过220V电压为您充电\");\n              return 220;\n          }\n      }\n      public class Adpater : ATarget, BTarget\n      {\n          private ATarget aTarget;\n          private BTarget bTarget;\n    \n          public Adpater(ATarget charger)\n          {\n              this.aTarget = charger;\n          }\n    \n          public Adpater(BTarget charger)\n          {\n              this.bTarget = charger;\n          }\n    \n          public int chargeBy110V()\n          {\n              int charge = aTarget.chargeBy220V();\n              charge -= 110;\n            Console.WriteLine(\"将220V降到110V输出\");\n              return charge;\n          }\n    \n          public int chargeBy220V()\n          {\n              int charge = bTarget.chargeBy110V();\n              charge += 110;\n            Console.WriteLine(\"将110V升到220V输出\");\n              return charge;\n          }\n      }\n    \n      public class Client\n      {\n          public void main(String[] args)\n          {\n              // 110V 转 220V\n              BTarget americanCharger = new AmericanCharger();\n              Adpater adpater = new Adpater(americanCharger);\n              adpater.chargeBy220V();\n    \n              // 220V 转 110V\n              ATarget chinaCharge = new ChinaCharger();\n              adpater = new Adpater(chinaCharge);\n              adpater.chargeBy110V();\n              /*\n              *美国充电器, 正在通过110V电压为您充电\n              *将110V升到220V输出\n              *中国充电器, 正在通过220V电压为您充电\n              *将220V降到110V输出\n              */\n    \n          }\n      }\n    }\n    ```",
          "上述代码用的是双适配器模式，即可以在美国用220V进行充电，也可以在中国用110V进行充电。"
        ]
      },
      {
        "heading": "1.4 优缺点",
        "paragraphs": [
          "-   **优点：**\n    1.  **将目标类和适配者进行解耦:**通过引入一个适配器类来重用现有的适配者类，无须修改原有逻辑。\n    2.  **复用性：**它是原本接口不兼容而不能使用的类变的可复用。\n    3.  **灵活性和扩展性：**只要客户端代码通过客户端接口与适配器进行交互，你就能在不修改现有客户端代码的情况下在程序中添加新类型的适配器。\n-   **缺点：**\n    1.  **系统可能变的混乱：**过多地使用适配器会让系统变得零乱，不容易整体把握。\n    2.  **增加系统复杂性：**引入适配器模式会增加系统的抽象性，理解和维护相对困难。"
        ]
      },
      {
        "heading": "1.5 适用场景",
        "paragraphs": [
          "1.  **对现有接口进行适配：**当一个类需要适用一个已有的接口，但是接口的方法不符合需求时，可以适用适配器模式将该接口适配到需要的形式。\n2.  **兼容多个版本或不同类库：**如果需要在不同版本或不同类库之间进行交互，适配器模式提供了一个中间层，将不同的接口进行适配。\n3.  **封装第三方组件：**当需要使用一个第三方组件并希望与该组件解耦时，适配器模式可以第三方组件进行封装，使代码更灵活。"
        ]
      },
      {
        "heading": "2.1 概述",
        "paragraphs": [
          "桥接模式是一种一种很实用的结构性设计模式，如果系统中的某个类存在**两个独立变化的维度**，通过桥接模式可以将这**两个维度分离开来**，使两者可以独立扩展。桥接模式用**抽象关联来取代传统的多层继承，将类之间的静态继承关系转换为动态的对象组合关系**，使系统更加灵活，并易于扩展。",
          "**定义：**将抽象部分与实现部分解耦，使得两者都能够独立变化。",
          "桥接模式最重要的是**理解维度**，比如蜡笔和毛笔两者都能用作于画画的工作，假如需要大、中、小三种型号的画笔，其中又需要12种颜色的画笔，如果用蜡笔的话则需要36支颜色的蜡笔，而使用毛笔则只需要3支不同型号的毛笔加上12种颜色的调色板，而且如果需要加一种颜色或者加一种型号则需要添加12支蜡笔，而毛笔只需要添加**一种型号或者一种颜色**即可。毛笔属于将型号和颜色划分为了两个维度，而蜡笔只有一个维度，桥接模式就是**将抽象部分和实现部分划为了两个维度**。"
        ]
      },
      {
        "heading": "2.2 模式结构",
        "paragraphs": [
          "桥接模式一共有4个角色:",
          "1.  **Abstraction(抽象类)：**它是用于定义抽象类的接口，**通常是抽象类而不是接口**，其中定义了一个**Implementor(实现接口)**类型的对象并可以维护该对象，他与Implementor之间具有**关联关系**，它既可以包含抽象业务方法，也可以包含具体业务方法。\n2.  **Refine Abstraction(扩充抽象类):**它扩充由**Abstraction**定义的接口，通常情况下它不再是抽象类而是**具体类**，实现了在Abstraction中声明的抽象业务方法，在Refine Abstraction中可以调用Implementor中定义的业务方法。\n3.  **Implementor(实现类接口):**它定义实现类的接口，这个接口不一定要与Abstraction的接口完全一致，一般而言，Implementor接口**仅仅只提供基本操作**，而Abstraction定义的接口可能会做更多复杂的操作，Implementor接口**对这些基本操作进行了声明，而具体实现交给其子类**，通过关联关系，在Abstraction中不仅拥有自己的方法，而且还可以调用到Implementor中定义的方法，使用**关联关系来替代继承关系**。\n4.  **Concrete Implementor(具体实现类)**：实现了Implementor接口，在不同的Concrete Implementor中提供基本操作的不同实现。",
          "![image-20240627231148675](@img/aap06xai)"
        ]
      },
      {
        "heading": "2.3 实现与应用实际",
        "paragraphs": [
          "设计一个系统，要求该系统能够显示BMP、JPG、GIF、PNG等多种格式的文件，并且能够在Windows、Linux、UNIX等多个操作系统上运行，系统需要将各种格式的文件解析成像素矩阵，然后将像素矩阵显示再屏幕上，在不同的操作系统中可以调用不同的绘制函数来绘制像素矩阵。"
        ]
      },
      {
        "heading": "2.3.1 Abstarction抽象类",
        "paragraphs": [
          "```csharp\npublic abstract class Image\n{\n    protected ImageImp imp;\n    public void SetImageImp(ImageImp imp)\n    {\n        this.imp = imp;\n    }",
          "public abstract void parseFile(string filename);\n}\n```"
        ]
      },
      {
        "heading": "2.3.2 Refine Abstraction扩充抽象类",
        "paragraphs": [
          "```csharp\npublic class JPGImage : Image\n{\n    public override void parseFile(string filename)\n    {\n        // 模拟解析一个JPG文件并获得一个像素矩阵对象m\n        Matrix matrix = new Matrix();\n        imp.DoPaint(matrix);\n        Console.WriteLine(filename + \", 格式为JPG\");\n    }\n}",
          "public class PNGImage : Image\n{\n    public override void parseFile(string filename)\n    {\n        // 模拟解析一个PNG文件并获得一个像素矩阵对象m\n        Matrix matrix = new Matrix();\n        imp.DoPaint(matrix);\n        Console.WriteLine(filename + \", 格式为PNG\");\n    }\n}",
          "public class GIFImage : Image\n{\n    public override void parseFile(string filename)\n    {\n        // 模拟解析一个GIF文件并获得一个像素矩阵对象m\n        Matrix matrix = new Matrix();\n        imp.DoPaint(matrix);\n        Console.WriteLine(filename + \", 格式为GIF\");\n    }\n}\n```"
        ]
      },
      {
        "heading": "2.3.3 Implementor实现接口",
        "paragraphs": [
          "```csharp\n    // 像素矩阵类，辅助类\n    public class Matrix\n    {",
          "}",
          "public interface ImageImp\n    {\n        public void DoPaint(Matrix matrix); // 显示像素矩阵\n    }\n```"
        ]
      },
      {
        "heading": "2.3.4 Concrete Implementor",
        "paragraphs": [
          "```csharp\npublic class WindowsImp : ImageImp\n{\n    public void DoPaint(Matrix matrix)\n    {\n        // 调用Windows系统的绘制函数绘制像素矩阵\n        Console.WriteLine(\"在Windows操作系统中显示图像\");\n    }\n}",
          "public class LinuxImp : ImageImp\n{\n    public void DoPaint(Matrix matrix)\n    {\n        // 调用Linux系统的绘制函数绘制像素矩阵\n        Console.WriteLine(\"在Linux操作系统中显示图像\");\n    }\n}",
          "public class UnixImp : ImageImp\n{\n    public void DoPaint(Matrix matrix)\n    {\n        // 调用Unix系统的绘制函数绘制像素矩阵\n        Console.WriteLine(\"在Unix操作系统中显示图像\");\n    }\n}",
          "public abstract class Image\n{\n    protected ImageImp imp;\n    public void SetImageImp(ImageImp imp)\n    {\n        this.imp = imp;\n    }",
          "public abstract void parseFile(string filename);\n}\n```"
        ]
      },
      {
        "heading": "2.4 优缺点",
        "paragraphs": [
          "-   **优点：**\n    1.  **分离抽象与实现：**将抽象部分与具体实现部分分离，使它们可以独立变化，允许我们在不影响彼此的情况下对它进行扩展\n    2.  **提高扩展性:**通过桥接模式，我们可以在两个变化维度中的任意一个进行扩展，而无须修改原有系统。\n-   **缺点:**\n    1.  **增加系统的复杂性：**桥接模式会增加系统的理解和设计难度，由于聚合关联关系简历抽象层，需要对抽象层进行设计和编程。\n    2.  **理解难度增加：**正确识别系统中的两个独立维度需要一定经验。"
        ]
      },
      {
        "heading": "2.5 适用场景",
        "paragraphs": [
          "1.  **存在独立变化维度：**一个类存在两个独立变化维度，且这两个维度都需要扩展。\n2.  **抽象实现灵活：**当抽象部分和具体实现部分之间有更多的灵活性，可适用桥接模式，可以避免两个层次之前使用**静态的继承关系**，而是通过组合建立关联关系。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-24",
    "tags": [
      "结构型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "组合模式",
    "date": "2024-06-30",
    "cover": "🏗️",
    "excerpt": "一、概念 在面向编程中，有一条非常经典的设计原则，那就是:组合优于继承，多用组合少用继承，继承是面向对象的四大特征之一,表示is-a的类关系，继承特性解决了代码复用的问题，但是当继承的深度过度，代码变得更复杂，变得更难以维护。而组成则表示h...",
    "sections": [
      {
        "heading": "一、概念",
        "paragraphs": [
          "在面向编程中，有一条非常经典的设计原则，那就是:**组合优于继承，多用组合少用继承**，继承是面向对象的四大特征之一,**表示`is-a`的类关系**，继承特性解决了代码复用的问题，但是当继承的深度过度，代码变得更复杂，变得更难以维护。而组成则**表示`has-a`的关系**，是把另外一个对象当作当前这个对象的一部分，是组成我的一部分，能够很好的实现代码的复用。",
          "组合模式是一种**结构性设计模式**，它允许你将对象组合成树形结构，以表示**部分-整体**的层次结构，这种模式对单个对象(即**叶子节点**)和组合对象(即**容器节点**)的使用具有一致性。",
          "**定义:**组合模式组合多个对象形成树形结构以表示具有**部分-整体**关系的层次结构，组合模式让客户端可以统一对待单个对象和组合对象。"
        ]
      },
      {
        "heading": "2.1 结构",
        "paragraphs": [
          "1.  **Component(抽象组件)**：定义了组合中所有对象必须实现的通用接口，可以是抽象类或者接口，它声明了用于访问和管理子组件的方法。包括添加、删除、获取子组件等。\n    \n2.  **Leaf(叶子构件):**它在组合结构中表示叶子节点对象，**叶子节点没有子节点**，它实现了组件接口的方法，但不包含子节点。\n    \n3.  **Composite(复合构件)：**表示了组合中的复合对象，复合节点可以包含子节点，也可以是叶子节点，也可以是其他复合节点，它实现了组合接口的方法，包括管理子节点的方法。\n    \n    ![image-20240630220426002](@img/q5aekmgh)"
        ]
      },
      {
        "heading": "2.2 透明组合模式与安全组合模式",
        "paragraphs": [
          "组合模式根据抽象构件类的定义形式又可以分为透明组合模式和安全组合模式。"
        ]
      },
      {
        "heading": "2.2.1 透明组合模式",
        "paragraphs": [
          "在抽象构件`Component`中声明了所有用于管理成员对象的方法，包括add()、remove()、以及getChild等方法，叶子节点和复合节点所有的方法都是一致的。",
          "![image-20240630222236068](@img/otkmesqj)",
          "透明组合模式缺点就是不够安全，叶子对象和容器对象在本质上是有区别的，叶子对象没有子节点，所有不会包含add、remove、getChild等方法，透明组合模式在编译阶段不会报错，但是在运行阶段调用则会抛出异常。"
        ]
      },
      {
        "heading": "2.2.2 安全组合模式",
        "paragraphs": [
          "在安全组合模式中，抽象构件`Component`中没有声明任何用于管理成员对象的方法，而是在`Composite`中声明并实现这些方法，这种方法是安全的。缺点就是不够透明，客户端不能完全针对抽象编程，必须区别对待叶子构件和容器构件。",
          "![image-20240630223218202](@img/oo66e8h3)"
        ]
      },
      {
        "heading": "三、应用实例",
        "paragraphs": [
          "以电脑的文件系统为例，利用组合模式来设计文件系统。",
          "-   **Component:**抽象组件\n    \n    ```csharp\n    public abstract class Component\n    {\n    \n      protected string _name;\n      public string Name => _name;\n    \n      public string Path { get; set; }\n      public bool IsDirectory { get; set; }\n      public bool IsFile { get; set; }\n    \n      public Component? parent;\n    \n      public virtual void Remove(Component component) { }\n      public abstract void Display();\n      public abstract void Delete();\n    }\n    ```\n    \n-   **Folder:**复合构件\n    \n    ```csharp\n    public class Folder : Component\n    {\n      public Folder() \n      {\n          _name = \"新建文件夹\";\n          IsDirectory = true;\n          IsFile = false;\n      }\n    \n      public Folder(string name) \n      {\n          _name = name;\n          IsDirectory = true;\n          IsFile = false;\n      }\n    \n      public List children = new List();\n    \n      public void Add(Component component) \n      {\n          component.Path = $\"{Path}/{component.Name}\";\n          component.parent = this;\n          children.Add(component);\n      }\n    \n      public override void Display()\n      {\n          Console.WriteLine($\"Name: {_name} Path: {Path}\");\n          foreach (Component component in children)\n          {\n              component.Display();\n          }\n      }\n    \n      public override void Delete()\n      {\n          children?.Clear();\n          children = null;\n      }\n    \n      public override void Remove(Component component)\n      {\n          children.Remove(component);\n          component = null;\n      }\n    }\n    ```\n    \n-   **File:**叶子构件\n    \n    ```csharp\n    public class File : Component\n    {\n      public File(string name)\n      {\n          _name = name;\n          IsDirectory = false;\n          IsFile = true;\n      }\n    \n      public override void Delete()\n      {\n          if (parent != null) parent.Remove(this);\n      }\n    \n      public override void Display()\n      {\n          Console.WriteLine($\"Name: {Name} Path: {Path}\");\n      }\n    }\n    ```\n    \n-   **Client:**客户端类\n    \n    ```csharp\n    Folder root = new Folder(\"root\");\n    \n    Folder Photo = new Folder(\"Photo\");\n    root.Add(Photo);\n    \n    Main.File boyPng = new Main.File(\"boy.png\");\n    Main.File grilPng = new Main.File(\"gril.png\");\n    Folder JPG = new Folder(\"JPG\");\n    Main.File boyJPG = new Main.File(\"boy.jpg\");\n    Photo.Add(boyPng);\n    Photo.Add(grilPng);\n    Photo.Add(JPG);\n    JPG.Add(boyJPG);\n    \n    Folder softWare = new(\"softWare\");\n    root.Add(softWare);\n    Main.File qq = new Main.File(\"qq.exe\");\n    Main.File wx = new Main.File(\"wx.exe\");\n    softWare.Add(qq);\n    softWare.Add(wx);\n    \n    root.Display();\n    \n    /*\n    Name: root Path:\n    Name: Photo Path: /Photo\n    Name: boy.png Path: /Photo/boy.png\n    Name: gril.png Path: /Photo/gril.png\n    Name: JPG Path: /Photo/JPG\n    Name: boy.jpg Path: /Photo/JPG/boy.jpg\n    Name: softWare Path: /softWare\n    Name: qq.exe Path: /softWare/qq.exe\n    Name: wx.exe Path: /softWare/wx.exe\n    */\n    ```"
        ]
      },
      {
        "heading": "四、优缺点",
        "paragraphs": [
          "-   **优点：**\n    1.  **定义层次:**清楚地定义了复杂对象的分层次结构，表示对象的全部或者部分层次。\n    2.  **忽略层次：**让客户端忽略层次之间的差异，方便对整个层次结构进行控制。\n    3.  **符合开闭原则：**可以轻松增加新的组件类型，而且不需要修改现有代码。\n-   **缺点：**\n    1.  **限制类型复杂:**在限制类型是，使用组合模式可能会变得复杂，比如有时候希望目录中只包含文本文件，但组合模式不能依赖类型系统施加约束，只能在运行时对类型进行检查。\n    2.  **使设计更加抽象：**组合模式引入了更多抽象概念，使设计变得更加抽象。"
        ]
      },
      {
        "heading": "五、使用场景",
        "paragraphs": [
          "1.  **处理树形结构:**组合模式非常适合处理具有层次结构的对象，例如游戏中的红点模式，界面管理都可以使用组合模式。\n2.  **忽略差异:**可以忽略组合对象和单个对象之间的差异，用一致的方式处理单个对象和组合对象。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-25",
    "tags": [
      "结构型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "装饰模式与外观模式",
    "date": "2024-07-02",
    "cover": "🏗️",
    "excerpt": "一、装饰模式 1.1 概念 装饰模式是一种用于替代继承的技术，它通过无须定义子类的方式来给对象动态的增加职责，使用对象之间的关联关系取代类之间的继承关系。装饰模式降低了系统的耦合度，可以动态增加或删除对象的职责。 定义：动态地给一个对象增加...",
    "sections": [
      {
        "heading": "1.1 概念",
        "paragraphs": [
          "装饰模式是一种用于**替代继承**的技术，它通过无须定义子类的方式来给对象动态的增加职责，使用对象之间的**关联关系**取代类之间的继承关系。装饰模式降低了系统的耦合度，可以动态增加或删除对象的职责。",
          "**定义：**动态地给一个对象增加一些额外的职责，就扩展功能而言，装饰模式提供了一种比使用子类更加灵活的替代方案。"
        ]
      },
      {
        "heading": "1.2 模式结构",
        "paragraphs": [
          "1.  **Component(抽象组件)：**具体组件和抽象装饰类的共同父类，声明了在具体构件中实现的业务方法，**定义了可以动态增加任务对象的接口**。\n    \n2.  **ConcreteComponent(具体组件)：**抽象组件的子类，用于定义**具体组件对象**，实现了抽象组件中声明的方法，装饰类可以给他增加额外的职责。\n    \n3.  **Decorator(抽象装饰类)：**也是抽象组件的子类，**用于给具体组件增加职责**，但是具体职责在其子类中实现。它维护一个只想抽象组件对象的引用，通过该引用可以调用装饰之前组件对象的方法，并通过其子类扩展该方法，达到装饰的目的。\n    \n4.  **ConcreteDecorator(具体装饰类)：**它是抽象装饰类的子类，**负责向组件添加新的职责**。每个具体装饰类都定义了一些新的行为，可以调用在抽象装饰类中定义的方法，并可以增加新的方法用于扩充对象的行为。\n    \n    ![image-20240701225111942](@img/8abfvznn)",
          "-   **核心代码:**\n    \n    ```csharp\n    public abstract class Component\n    {\n      public abstract void operation();\n    }\n    \n    public class ConcreteComponent : Component\n    {\n      public override void operation()\n      {\n          // 基本功能实现\n          Console.WriteLine(\"基本功能实现\");\n      }\n    }\n    \n    public class Decorator : Component\n    {\n      private Component component;\n    \n      public Decorator(Component component)\n      {\n          this.component = component;\n      }\n    \n      public override void operation()\n      {\n          component.operation();\n      }\n    }\n    \n    public class ConcreteDecorator : Decorator\n    {\n      public ConcreteDecorator(Component component) : base(component)\n      {\n      }\n      public override void operation()\n      {\n          base.operation();\n          addBehavior();\n      }\n    \n      public void addBehavior()\n      {\n          Console.WriteLine(\"进行扩展\");\n      }\n    }\n    public class Client\n    {\n      public void Main()\n      {\n          Component simple = new ConcreteComponent();\n          ConcreteDecorator decorator = new ConcreteDecorator(simple);\n          decorator.operation();\n      }\n    \n      /*\n       * 基本功能实现\n       * 进行扩展\n       */\n    }\n    ```"
        ]
      },
      {
        "heading": "1.3 应用实例",
        "paragraphs": [
          "为了让系统具有更好的灵活性和可扩展性，克服继承复用所带来的问题，公司使用装饰模式来重构图形界面构件库的设计。",
          "-   **Component类：**抽象组件\n    \n    ```csharp\n      public abstract class Component\n      {\n          public abstract void display();\n      }\n    ```\n    \n-   **ConcreteComponent类：**具体实现组件\n    \n    ```csharp\n    public class Window : Component\n    {\n      public override void display()\n      {\n          Console.WriteLine(\"显示窗体\");\n      }\n    }\n    \n    public class TextBox : Component\n    {\n    \n      public override void display()\n      {\n          Console.WriteLine(\"显示文本框\");\n      }\n    }\n    \n    public class ListBox : Component\n    {\n      public override void display()\n      {\n          Console.WriteLine(\"显示列表框\");\n      }\n    }\n    ```\n    \n-   **ComponentDecorator类:**抽象装饰类\n    \n    ```csharp\n    public class ComponentDecorator : Component\n    {\n      private Component component;\n      public ComponentDecorator(Component component)\n      {\n          this.component = component;\n      }\n    \n      public override void display()\n      {\n          component.display();\n      }\n    }\n    ```\n    \n-   **ConcreteDecorator类:**具体装饰类\n    \n    ```csharp\n    public class ScrollBarDecorator : ComponentDecorator\n    {\n      public ScrollBarDecorator(Component component) : base(component)\n      {\n      }\n    \n      public override void display()\n      {\n          AddScrollBar();\n          base.display();\n      }\n    \n      public void AddScrollBar()\n      {\n          Console.WriteLine(\"为组件增加滚动条\");\n      }\n    }\n    \n    public class BlackBorderDecorator : ComponentDecorator\n    {\n      public BlackBorderDecorator(Component component) : base(component)\n      {\n      }\n      public override void display()\n      {\n          AddBlackBorder();\n          base.display();\n      }\n    \n      public void AddBlackBorder()\n      {\n          Console.WriteLine(\"为组件增加黑色边框\");\n      }\n    }\n    ```\n    \n-   **Client类:**\n    \n    ```csharp\n    Component window = new Window();\n    Component blackWindow = new BlackBorderDecorator(window);\n    blackWindow.display();\n    Component blackScrollWindow = new ScrollBarDecorator(blackWindow);\n    blackScrollWindow.display();\n    /*\n    * 为组件增加黑色边框\n    * 显示窗体\n    * 为组件增加滚动条\n    * 为组件增加黑色边框\n    * 显示窗体\n    */\n    ```"
        ]
      },
      {
        "heading": "1.4 优缺点",
        "paragraphs": [
          "-   **优点：**\n    1.  **灵活性和扩展性:**装饰模式可以在运行时动态地添加或者移除对象的职责，而**无须修改原始类**，使系统更加灵活且易于扩展。\n    2.  **避免类爆炸:**适用继承来添加新功能会导致类的数量迅速增加，形成类爆炸，装饰模式通过组合而不是继承，会避免类爆炸。\n    3.  **单一职责和开闭原则**：符合单一职责和开闭原则\n-   **缺点:**\n    1.  **复杂性:**引入很多小的装饰类，可能会增加代码复杂性。\n    2.  **运行时开销：**每次装饰都需要创建一个新的装饰对象。"
        ]
      },
      {
        "heading": "1.5 适用场景",
        "paragraphs": [
          "1.  **功能扩展:**当需要在不修改现有的对象，动态地添加功能时，可以适用装饰模式，利用组合的方式去增加功能。\n2.  **避免类爆炸：** 当需要为多个独立的对象添加相同或类似的功能时，装饰模式可以避免创建大量的子类来实现不同组合的功能。它允许你按需组合功能，而不是静态地继承。"
        ]
      },
      {
        "heading": "2.1 概念",
        "paragraphs": [
          "外观模式(又称门面模式)是一种使用频率很高的设计模式，它通过引入一个**外观角色来简化客户端与子系统之间的交互。**为复杂的子系统调用提供了一个统一的入口，使子系统与客户端的耦合度降低。**外观类将客户类与子系统的内部复杂性分隔开来**，客户类只需要跟外观角色打交道，不需要与子系统内部的很多对象打交道。",
          "**定义：**外观模式是一种为多个复杂的子系统提供一致的接口，而使这些子系统更容易被访问的模式，该模式对外有一个统一接口，外观角色不用关心内部子系统的具体细节。"
        ]
      },
      {
        "heading": "2.2 模式结构",
        "paragraphs": [
          "-   **Facade(外观角色)：**它是客户端和子系统的中介，封装了子系统的复杂性，并提供了一个接口给客户端使用。\n    \n-   **SubSystem(子系统角色)：**实现了子系统的功能，由多个模块组成，可以是一个类或者多个类。外观角色也是子系统角色的客户端类。\n    \n    ![image-20240702223933612](@img/jiow62gk)"
        ]
      },
      {
        "heading": "2.3 应用实例",
        "paragraphs": [
          "设计一个DVD播放器系统，它由多个子系统组成，如音频、视频、界面等",
          "-   **SubSystem**：子系统\n    \n    ```csharp\n    public class Audio\n    {\n      public void On() { Console.WriteLine(\"Audio On\"); }\n      public void Off() { Console.WriteLine(\"Audio Off\"); }\n    }\n    \n    public class Video\n    {\n      public void On() { Console.WriteLine(\"Video On\"); }\n      public void Off() { Console.WriteLine(\"Viedo Off\"); }\n    }\n    \n    public class UIPanel\n    {\n      public void On() { Console.WriteLine(\"UIPanel On\"); }\n      public void Off() { Console.WriteLine(\"UIPanel Off\"); }\n    }\n    ```\n    \n-   **Facade**：外观角色\n    \n    ```csharp\n    public class MediaPlayerFacade\n    {\n      private Audio _audio;\n      private Video _video;\n      private UIPanel _panel;\n    \n      public MediaPlayerFacade() \n      {\n          _audio = new Audio();\n          _video = new Video();\n          _panel = new UIPanel();\n      }\n    \n      public void Play()\n      {\n          _audio.On();\n          _video.On();\n          _panel.On();\n      }\n    \n      public void Stop()\n      {\n          _audio.Off();\n          _video.Off();\n          _panel.Off();\n      }\n    }\n    ```\n    \n-   **Client类**:\n    \n    ```csharp\n    public class Client\n    {\n      public void Main(string[] args)\n      {\n          MediaPlayerFacade mediaPlayerFacade = new MediaPlayerFacade();\n          mediaPlayerFacade.Play();\n    \n          mediaPlayerFacade.Stop();\n    \n          /*\n           * Audio On\n           * Video On\n           * UIPanel On\n           * Audio Off\n           * Viedo Off\n           * UIPanel Off\n           */\n      }\n    }\n    ```"
        ]
      },
      {
        "heading": "2.4 优缺点",
        "paragraphs": [
          "-   **优点:**\n    1.  **符合迪米特法则:**外观模式使用户不需要了解子系统内部情况，只与外观模式交互，降低了应用层与子系统之间的耦合度。\n    2.  **简化调用、层次控制：**简化了复杂系统的调用过程，只需要与外观类交互即可,将客户端与子系统分层。\n-   **缺点:**\n    1.  **不符合开闭原则:**当需要增加新的子系统或移除现有系统时，可能需要修改外观类或者客户端代码，不够灵活。\n    2.  **可能导致系统过于复杂：**过度使用外观模式可能增加系统中类的数量。"
        ]
      },
      {
        "heading": "2.5 适用场景",
        "paragraphs": [
          "1.  **对外提供简化接口:**当需要向外部提供一个简化接口并隐藏内部复杂性时，如SDK、API、库等可以使用外观模式。\n2.  **层次结构系统:**在层次结构复杂的系统中，可以使用外观模式对客户端和子系统进行解耦分层。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-26",
    "tags": [
      "结构型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "享元模式",
    "date": "2024-07-06",
    "cover": "🏗️",
    "excerpt": "一、概念 当系统存在大量相同或者相似的对象时，可以使用享元模式。享元模式通过共享技术实现相同或者相似的细粒度对象的复用，从而节约了内存空间，提高了系统性能。在享元模式中提供了一个享元池用于存储已经创建好的享元对象，并通过享元工厂类将享元对象...",
    "sections": [
      {
        "heading": "一、概念",
        "paragraphs": [
          "当系统存在大量相同或者相似的对象时，可以使用享元模式。享元模式**通过共享技术实现相同或者相似的细粒度对象的复用**，从而节约了内存空间，提高了系统性能。在享元模式中提供了一个**享元池**用于存储已经创建好的享元对象，并通过**享元工厂类**将**享元对象**提供给客户端使用。",
          "**定义:**运用共享技术有效地支持大量细粒度对象的复用。",
          "享元模式与对象池模式的区别:对象池的概念是为了避免频繁地进行对象创建和释放导致内存碎片，可以预**先申请一片连续地区域空间**，每次创建对象时，从对象池取出空闲对象来使用，使用完成后再放回对象池以供后续使用。",
          "对象池复用为**重复使用**，主要目的是**节省时间与性能消耗**。而享元模式的复用可以理解为**共享使用**，整个声明周期都是被所有使用者共享的，主要目的是**节省空间**。"
        ]
      },
      {
        "heading": "二、模式结构",
        "paragraphs": [
          "享元模式(又称轻量级模式)通常结合工厂模式一起使用，要求能够被共享的对象必须是**细粒度对象**，是一种对象结构型模式。",
          "-   **Flyweight(抽象享元类):**抽象享元类通常是一个接口或者是抽象类，其声明了具体享元类公共的方法，这些方法向外界提供享元对象的**内部数据(内部状态)**，同时也通过这些方法来设置**外部数据(外部状态)**。\n    \n-   **ConcreteFlyweight(具体享元类):**具体享元类实现了抽象享元类，其实例被称为享元对象，为内部状态提供存储空间。\n    \n-   **UnsharedConcreteFlyweight（非共享具体享元类）：**继承于抽象享元类，但是不能被共享。\n    \n-   **FlyweightFactory(享元工厂类):**用于创建并管理享元类对象，将各种类型的具体享元类对象存储在享元池中。\n    \n    ![image-20240706222025606](@img/no5x92vl)\n    \n-   **单纯共享模式:**在单元共享模式中所有的具体享元类都是可以共享的，不存在非共享具体享元类。\n    \n    ![image-20240706223613510](@img/i2ohfzrx)\n    \n-   **复合享元模式:**将一些单纯享元对象使用组合模式还可以形成复合享元对象，复合享元模式虽然本身不可共享，但是可以将多个内部状态不同的享元对象设置成相同的外部状态。\n    \n    ![image-20240706224459989](@img/agvu6gva)"
        ]
      },
      {
        "heading": "三、具体实现",
        "paragraphs": [
          "设计一款围棋游戏，棋盘中存在需要除坐标不同，其他都相同的黑子、白子，如果将所有的棋子都作为一个独立对象存储在内存中，将导致所需内存空间较大，这个时候也使用享元模式来解决该问题。",
          "-   **Coordinates:**坐标类，用来表示享元模式的外部状态",
          "```csharp\npublic class Coordinates\n{\n    private int x;\n    private int y;",
          "public Coordinates(int x, int y)\n    {\n        this.x = x;\n        this.y = y;\n    }",
          "public int getX()\n    {\n        return x;\n    }\n    public int getY()\n    {\n        return y;\n    }\n    public void setPos(int x, int y)\n    {\n        this.x = x;\n        this.y = y;\n    }\n}\n```",
          "-   **IgoChessman(抽象享元类):**抽象棋子类",
          "```csharp\npublic abstract class IgoChessman\n{\n    public abstract string GetColor();",
          "public void Display(Coordinates coordinates)\n    {\n        Console.WriteLine($\"棋子颜色: {GetColor()}, 棋子位置: {coordinates.getX()}, {coordinates.getY()}\");\n    }\n}\n```",
          "-   **BlackIgoChessman、WhiteIgoCheesman(具体享元类)：**黑白棋子类",
          "```csharp\npublic class BlackIgoChessman : IgoChessman\n{\n    public override string GetColor()\n    {\n        return \"Black\";\n    }\n}",
          "public class WhiteIgoCheesman : IgoChessman\n{\n    public override string GetColor()\n    {\n        return \"White\";\n    }\n}\n```",
          "-   **IgoChessmanFactory(享元工厂类):**创造黑白棋子",
          "```csharp\npublic class IgoChessmanFactory\n{\n    private static IgoChessmanFactory _instance;\n    private Dictionary<string, IgoChessman> _igoChessDictionary = new Dictionary<string, IgoChessman>();",
          "public static IgoChessmanFactory GetInstance()\n    {\n        if (_instance == null) _instance = new IgoChessmanFactory();\n        return _instance;\n    }\n    public IgoChessman GetIgoChessman(string name)\n    {\n        if (!_igoChessDictionary.TryGetValue(name, out IgoChessman chessman))\n        {\n            if (name == \"Black\") chessman = new BlackIgoChessman();\n            else if (name == \"White\") chessman = new WhiteIgoCheesman();\n            _igoChessDictionary.Add(name, chessman);\n        }\n        return chessman;\n    }\n}\n```",
          "-   **Client:**客户端",
          "```csharp\nIgoChessman black1, black2, black3, white1, white2;\nIgoChessmanFactory igoChessmanFactory = IgoChessmanFactory.GetInstance();\nCoordinates coordinates = new Coordinates(0, 0);",
          "black1 = igoChessmanFactory.GetIgoChessman(\"Black\");\nblack2 = igoChessmanFactory.GetIgoChessman(\"Black\");\nblack3 = igoChessmanFactory.GetIgoChessman(\"Black\");\nif (black1 == black2 && black2 == black3) Console.WriteLine(\"Same Black Chess\");\nwhite1 = igoChessmanFactory.GetIgoChessman(\"White\");\nwhite2 = igoChessmanFactory.GetIgoChessman(\"White\");\nif (white1 == white2) Console.WriteLine(\"Same White Chess\");\nblack1.Display(coordinates);\ncoordinates.setPos(1, 0);\nblack2.Display(coordinates);\ncoordinates.setPos(1, 1);\nblack3.Display(coordinates);\ncoordinates.setPos(1, 2);\nwhite1.Display(coordinates);\ncoordinates.setPos(1, 3);\nwhite2.Display(coordinates);\n```"
        ]
      },
      {
        "heading": "四、优缺点",
        "paragraphs": [
          "-   **优点：**\n    1.  **降低内存消耗：**通过共享内部状态，相同对象只需要保存一份，从而减少了系统对象的数量，降低内存占用。\n    2.  **提高性能：**由于对象数量减少，性能也会相应提升。\n-   **缺点：**\n    1.  **增加程序复杂性：**为了使对象可以共享，需要将不能共享的状态外部化，使逻辑变得复杂。\n    2.  **运行时间变长：**读取享元模式的外部状态可能会增加运行时间。"
        ]
      },
      {
        "heading": "五、适用场景",
        "paragraphs": [
          "1.  当系统有大量相同或者相似的对象，造成内存浪费时，可以使用享元模式。\n2.  对象的大部分状态都可以外部化，可以将这些外部状态传入对象。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-27",
    "tags": [
      "结构型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "代理模式",
    "date": "2024-07-08",
    "cover": "🏗️",
    "excerpt": "一、概念 当无法直接访问某个对象或者访问某个对象存在困难时可以通过一个代理对象来间接访问，为了保证客户端使用的透明性，所访问的真实对象与代理对象要实现相同的接口。代理模式根据其目的不同，划分为保护代理、虚拟代理、缓存代理等。 代理模式引入一...",
    "sections": [
      {
        "heading": "一、概念",
        "paragraphs": [
          "当无法直接访问某个对象或者访问某个对象存在困难时可以通过一个代理对象来间接访问，为了保证客户端使用的透明性，所访问的真实对象与代理对象要实现相同的接口。代理模式根据其目的不同，划分为**保护代理、虚拟代理、缓存代理等**。",
          "代理模式引入一个代理对象，在客户对象和目标对象中之间起到一个中介的作用，去掉了客户不能看到的内容和服务或者添加客户需要的额外的新服务。",
          "**定义：**给某一个对象提供一个代理或占位符，并由代理对象来控制原对象的访问。"
        ]
      },
      {
        "heading": "二、模式结构",
        "paragraphs": [
          "-   **Subject(抽象主题类):**声明了真实主题和代理主题的共同接口，使所有使用真实主题的都可以使用代理主题。\n    \n-   **Real Subject(真实主题)：**实现了抽象主题中的具体业务，是代理对象所代表的真实对象，实现了真实的业务操作。\n    \n-   **Proxy(代理主题)：**提供了与真实主题相同的接口，其中内部含有对真实主题类的引用，它可以访问、控制或者扩展真实主题。\n    \n    ![image-20240707223052226](@img/hqh0exkd)",
          "```csharp\npublic abstract class Subject\n{\n    public abstract void request();\n}",
          "public class RealSubject: Subject\n{\n    public override void request()\n    {\n        // 业务方法的具体实现\n    }\n}",
          "public class Proxy : Subject\n{\n    private RealSubject _realSubject = new RealSubject();\n    public void preRequest()\n    {",
          "}\n    public override void request()\n    {\n        preRequest();\n        _realSubject.request();\n        postRequest();\n    }",
          "public void postRequest()\n    {",
          "}\n}\n```"
        ]
      },
      {
        "heading": "三、代理模式分类",
        "paragraphs": [
          "代理模式根据其目的和实现方式不同可分为多种种类。",
          "1.  **远程代理：**为一个位于不同地址空间的对象提供一个本地的代理对象，这个不同的地址空间可以在同一个主机中，也可以在另一台主机中（如网络通信）。\n2.  **虚拟代理：**对于一些占用系统资源较多或者加载时间较长的对象，可以给这些对象提供一个虚拟代理，在真实对象创建成功之前虚拟代理扮演真实对象的替身，当真实对象创建之后虚拟对象再将用户的请求转发给真实对象(如网站加载资源，或者图片等)。\n3.  **保护代理：**控制对一个对象的访问，并可以给不同用户不同的访问权限。\n4.  **缓存代理：**为了某个目标操作的结果提供一个临时的存储空间，以便更多个客户端可以共享这些结果。\n5.  **智能引用代理:**当一个对象被引用时提供一些额外的操作，如将对象被调用的次数记录下路。"
        ]
      },
      {
        "heading": "四、具体实现",
        "paragraphs": [
          "某软件公司需实现一个收费商务信息查询系统，用户在查询之前需要通过身份验证，只有合法的用户才能进行查询业务，并在进行商务查询时记录查询日志，以便根据查询次数进行查询收费。使用代理模式来实现身份认真和日志记录等功能，而查询功能由真实对象来实现。",
          "**AccessValidator、Logger：**业务类",
          "```csharp\npublic class AccessValidator\n{\n    private Dictionary<int, string> _users;",
          "public bool Validate(int uid, string password)\n    {\n        if (_users == null) _users = new Dictionary<int, string>();\n        if (_users.ContainsKey(uid) && _users[uid] == password)\n        {\n            Console.WriteLine(\"验证成功\");\n            return true;\n        }\n        else\n        {\n            Console.WriteLine(\"登录失败\");\n            return false;\n        }\n    }\n}",
          "public class Logger\n{\n    private Dictionary<int, int> _userSearch;\n    public void Log(int uid)\n    {\n        if (_userSearch == null) _userSearch = new Dictionary<int, int>();\n        if (_userSearch.TryGetValue(uid, out int count))\n        {\n            _userSearch[uid] = count + 1;\n            Console.WriteLine(\"更新数据库, 用户查询次数 + 1\");\n        }\n        else\n        {\n            _userSearch.Add(uid, 1);\n        }\n    }\n}",
          "public struct UserInfo\n{\n    public int uid;\n    public string name;\n}\n```",
          "**Search(抽象主题类):**查询接口",
          "```csharp\npublic interface Searcher\n{\n    public abstract UserInfo DoSearch(int uid, string password);\n}\n```",
          "**RealSearch(真实主题类):**真实查询类",
          "```csharp\n public class RealSearcher : Searcher\n {\n     private Dictionary<int, UserInfo> _userInfo;",
          "public UserInfo DoSearch(int uid, string password)\n     {\n         UserInfo info = new UserInfo();\n         if (_userInfo == null) _userInfo = new Dictionary<int, UserInfo>();\n         if (_userInfo.TryGetValue(uid, out var UserInfo))\n         {\n             info = UserInfo;\n         }\n         return info;\n     }\n }\n```",
          "**Proxy(代理类):**代理查询类",
          "```csharp\n  public class Proxy : Searcher\n  {\n      private RealSearcher _realSearcher = new RealSearcher();\n      private Logger _logger;\n      private AccessValidator _accessValidator;\n      public UserInfo DoSearch(int uid, string password)\n      {\n          UserInfo userInfo = new UserInfo();\n          if (Vaildate(uid, password))\n          {   \n              userInfo = _realSearcher.DoSearch(uid, password);\n              Log(uid);\n          }\n          return userInfo;\n      }",
          "public bool Vaildate(int uid, string password)\n      {\n          if (_accessValidator == null) _accessValidator = new AccessValidator();\n          return _accessValidator.Validate(uid, password);\n      }",
          "public void Log(int  uid)\n      {\n          if (_logger == null) _logger = new Logger();\n          _logger.Log(uid);\n      }\n  }\n```"
        ]
      },
      {
        "heading": "五、优缺点",
        "paragraphs": [
          "-   **优点:**\n    1.  **分离目标对象:**代理模式将代理对象与真实对象分离，降低了系统的耦合度，使系统更具有扩展性。\n    2.  **保护目标对象：**客户端只与代理类交互，不直接接触目标对象，从而保护了目标对象的业务逻辑。\n    3.  **增加目标对象:**代理类可以在目标对象的基础上添加新的功能。\n-   **缺点：**\n    1.  **类的个数增加：**引入代理模式会增加系统的类数量，增加类的复杂性。\n    2.  **性能降低：**在客户端和目标对象之间添加一个代理对象，可能导致请求处理速度变慢。"
        ]
      },
      {
        "heading": "六、适用场景",
        "paragraphs": [
          "1.  **保护目标对象：** 代理模式用于限制客户端直接访问目标对象的细节。类似于租客通过中介找房东租房子，客户端只与代理类交互，不清楚目标对象的具体细节。\n2.  **增强目标对象：** 代理类可以在目标对象的基础上添加新的功能。例如，代理模式可以用于在访问对象前后添加额外的逻辑。\n3.  **远程代理：** 在网络编程中，可以使用代理服务器来缓存请求和响应，从而提高网络访问速度。\n4.  **虚拟代理：** 虚拟代理用于延迟加载资源，例如大型图像或视频文件，只有在需要时才真正加载资源。\n5.  **智能引用：** 智能引用代理用于管理资源和内存，例如引用计数、垃圾回收等。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-28",
    "tags": [
      "行为型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "职责链模式",
    "date": "2024-07-09",
    "cover": "🏗️",
    "excerpt": "一、概念 在系统中如果存在多个对象可以处理同一请求，则可以通过职责链模式将这些处理请求的对象连成一条链，让请求沿着该链进行传递。如果链上的对象可以处理该请求则进行处理，否则将请求转发给下家进行处理。 定义:避免将一个请求的发送者与接收者耦合...",
    "sections": [
      {
        "heading": "一、概念",
        "paragraphs": [
          "在系统中如果存在多个对象可以处理同一请求，则可以通过职责链模式将这些处理请求的对象连成一条链，让请求沿着该链进行传递。如果链上的对象可以处理该请求则进行处理，否则将请求转发给下家进行处理。",
          "**定义:**避免将一个请求的发送者与接收者耦合在一起。让多个对象都有机会处理请求。将接收请求的对象连接成一条链，并沿着这条链传递请求，直到有一个对象能够处理它为止。"
        ]
      },
      {
        "heading": "二、模式结构",
        "paragraphs": [
          "-   **Handler(抽象处理者):**它定义一个处理请求的接口，包含了抽象处理方法和后继连接。\n    \n-   **Concrete Handler(具体处理者):**实现抽象处理者的处理方法，判断能否处理本次请求，如果可以处理请求则处理，否则将该请求转给它的后继者。\n    \n-   **Client(客户端角色):**创建处理链，并向链头的具体处理者对象提交请求。\n    \n    ![image-20240708232919630](@img/3gh1zcm3)"
        ]
      },
      {
        "heading": "三、具体实现",
        "paragraphs": [
          "设计一个系统关于采购审批子系统，根据采购金额的不同由不同层次的主管人员进行审批，其中主任可以审批5万元以下，副董事长可以审批5-10万，董事长可以审批10-50万，超过50万需要董事会开会决定。",
          "-   **PurchaseRequest(请求类):**采购单类",
          "```csharp\npublic class PurchaseRequest\n{\n    private double _amount;\n    private int _number;\n    private string _purpose;",
          "public PurchaseRequest(double amount, int number, string purpose)\n    {\n        _amount = amount;\n        _number = number;\n        _purpose = purpose;\n    }\n    public void SetPurchase(double amount, int number)\n    {\n        _amount = amount;\n        _number = number;\n    }",
          "public double GetTotalPrice()\n    {\n        return _number * _amount;\n    }\n    public string GetPurchase()\n    {\n        return _purpose;\n    }\n}\n```",
          "-   **Approver(抽象处理类):**审批者类",
          "```csharp\npublic abstract class Approver\n{\n    protected Approver successor;   //后继对象\n    protected string name;          //审批者姓名",
          "public Approver(string name)\n    {\n        this.name = name;\n    }",
          "public void SetSuccessor(Approver successor)\n    {\n        this.successor = successor;\n    }",
          "public abstract void ProcessRquest(PurchaseRequest purchase);\n}\n```",
          "-   **Concrete Approver(具体处理类):**具体审批类",
          "```csharp\npublic class Director : Approver\n{\n    public Director(string name) : base(name)\n    {\n        this.name = name;\n    }",
          "public override void ProcessRquest(PurchaseRequest purchase)\n    {\n        if (purchase.GetTotalPrice() < 50000)\n        {\n            Console.WriteLine($\"主任:{name} 审批采购单: {purchase.GetPurchase()} 金额:{purchase.GetTotalPrice()}\");\n        }\n        else\n        {\n            this.successor.ProcessRquest(purchase);\n        }\n    }\n}",
          "public class VicePresident : Approver\n{\n    public VicePresident(string name) : base(name)\n    {\n        this.name = name;\n    }",
          "public override void ProcessRquest(PurchaseRequest purchase)\n    {\n        if (purchase.GetTotalPrice() < 100000)\n        {\n            Console.WriteLine($\"副董事长:{name} 审批采购单: {purchase.GetPurchase()} 金额:{purchase.GetTotalPrice()}\");\n        }\n        else\n        {\n            this.successor.ProcessRquest(purchase);\n        }\n    }\n}",
          "public class President : Approver\n{\n    public President(string name) : base(name)\n    {\n        this.name = name;\n    }",
          "public override void ProcessRquest(PurchaseRequest purchase)\n    {\n        if (purchase.GetTotalPrice() < 500000)\n        {\n            Console.WriteLine($\"董事长:{name} 审批采购单: {purchase.GetPurchase()} 金额:{purchase.GetTotalPrice()}\");\n        }\n        else\n        {\n            this.successor.ProcessRquest(purchase);\n        }\n    }\n}",
          "public class Congress : Approver\n{\n    public Congress(string name) : base(name)\n    {\n        this.name = name;\n    }",
          "public override void ProcessRquest(PurchaseRequest purchase)\n    {\n        Console.WriteLine($\"召开董事会 审批采购单: {purchase.GetPurchase()} 金额:{purchase.GetTotalPrice()}\");\n    }\n}\n```",
          "-   **Client:**客户端类",
          "```csharp\npublic class Client\n{\n    public void Main(string[] args)\n    {\n        Approver liming, jianguo, lihua, meet;\n        liming = new Director(\"李明\");\n        jianguo = new VicePresident(\"建国\");\n        lihua = new President(\"李华\");\n        meet = new Congress(\"董事会\");",
          "liming.SetSuccessor(jianguo);\n        jianguo.SetSuccessor(lihua);\n        lihua.SetSuccessor(meet);",
          "PurchaseRequest purchase = new PurchaseRequest(45000, 1, \"办公桌\");\n        liming.ProcessRquest(purchase);",
          "PurchaseRequest purchase1 = new PurchaseRequest(60000, 1, \"电梯\");\n        liming.ProcessRquest(purchase1);",
          "PurchaseRequest purchase2 = new PurchaseRequest(150000, 1, \"空调\");\n        liming.ProcessRquest(purchase2);",
          "PurchaseRequest purchase3 = new PurchaseRequest(510000, 1, \"办公室\");\n        liming.ProcessRquest(purchase3);",
          "/*\n         * 主任:李明 审批采购单: 办公桌 金额:45000\n         * 副董事长:建国 审批采购单: 电梯 金额:60000\n         * 董事长:李华 审批采购单: 空调 金额:150000\n         * 召开董事会 审批采购单: 办公室 金额:510000\n         */\n    }\n}\n```"
        ]
      },
      {
        "heading": "四、优缺点",
        "paragraphs": [
          "-   **优点：**\n    1.  **降低耦合度：**请求发送者不需要知道具体的处理者是谁，也不需要关心请求是如何被处理的，降低了发送者和处理者之间的耦合度。\n    2.  **可扩展性：**可以动态地添加或者修改处理链，增加新的处理者或者调整处理顺序，而无需要修改已有代码。\n-   **缺点：**\n    1.  **请求可能未被处理:**如果责任链中没有正确配置明确的接收者或者最后一个接受者没有处理请求，则请求会被漏掉，一直没法处理。\n    2.  **性能影响:**如果处理链过长，则系统性能会受到一定影响。"
        ]
      },
      {
        "heading": "五、适用环境",
        "paragraphs": [
          "1.  有多个对象可以处理同一请求，具体哪个对象处理该请求待运行时在确定。\n2.  动态指定一组对象处理请求，动态创建职责链来处理请求,还可以改变链中处理者之间的次序。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-29",
    "tags": [
      "行为型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "观察者模式",
    "date": "2024-07-10",
    "cover": "🏗️",
    "excerpt": "一、概念 观察者模式是使用频率较高的设计模式之一，它用于建立一种对象与对象之间的依赖关系，当一个对象发生改变时将自动通知其他对象,其他对象将做出相应的反应。在观察者模式中发生改变的对象称为观察目标，而被通知的对象成为观察者，一个观察者目标可...",
    "sections": [
      {
        "heading": "一、概念",
        "paragraphs": [
          "观察者模式是使用频率较高的设计模式之一，它用于建立一种对象与对象之间的依赖关系，当一个对象发生改变时将自动通知其他对象,其他对象将做出相应的反应。在观察者模式中发生改变的对象称为观察目标，而被通知的对象成为观察者，一个观察者目标可以对应多个观察者。",
          "**定义：**定义对象之间的一种一对多的依赖关系，使得每当一个对象状态发生改变时其相关依赖对象皆得到通知并自动更新。"
        ]
      },
      {
        "heading": "二、模式结构",
        "paragraphs": [
          "-   **Subject(目标)：**被观察的对象，在目标定义一个观察者集合，一个观察目标可以接受任意数量的观察者来观察，它提供一系列方法来增加和删除观察者对象，同时它定义了通知方法notify()。\n    \n-   **Concrete Subject(具体目标)：**是目标的具体实现类，它维护着观察者列表，并在状态发生改变时通知观察者。\n    \n-   **Observer(观察者):**是接受目标通知的对象，定义了一个更新方法，当收到目标通知时，调用更新方法进行更新操作。\n    \n-   **Concrete Observer(具体观察者)：**观察者的具体实现类，实现了更新方法，定义了在收到通知时需要执行的具体通知。\n    \n    ![image-20240709231123008](@img/73rb45cl)"
        ]
      },
      {
        "heading": "三、模式实现",
        "paragraphs": [
          "```csharp\n// 目标类\npublic abstract class Subject\n{\n    protected List<Observer> observers = new List<Observer>();",
          "public void AddObserver(Observer observer)\n    {\n        observers.Add(observer);\n    }",
          "public void RemoveObserver(Observer observer)\n    {\n        observers.Remove(observer);\n    }",
          "public abstract void Notify();\n}\n// 具体目标类\npublic class ConcreteSubject : Subject\n{\n    public override void Notify()\n    {\n        foreach (var obs in observers)\n        {\n            obs.Update();\n        }\n    }\n}\n// 观察者类\npublic abstract class Observer\n{\n    public abstract void Update();\n}\n// 具体观察者类\npublic class ConcreteObserver : Observer\n{\n    public override void Update()\n    {\n        // 具体响应代码\n    }\n}\n```"
        ]
      },
      {
        "heading": "四、优缺点",
        "paragraphs": [
          "-   **优点：**\n    1.  **降低耦合度:**将表示层与数据逻辑层分离,定义了稳定的消息更新传递机制，并抽象了更新接口，使得可以有各种各样的表示层充当具体观察角色。\n    2.  **广播通信:**观察目标会将所有已注册的观察者对象发送通知，简化了一对多系统设计的难度。\n    3.  **符合开闭原则：**增加新的具体观察者无须修改原有系统代码，在具体观察者与观察者目标不存在联系关系。\n-   **缺点:**\n    1.  **性能消耗：**如果一个观察目标有很多直接或者间接观察者时，所有的观察者都会通知到，而且如果观察目标状态不断发生改变，会一直通知调用，会很消耗性能。\n    2.  **死循环：**如果观察者与观察目标之间存在循环依赖，可能会导致系统崩溃。"
        ]
      },
      {
        "heading": "五、适用场景",
        "paragraphs": [
          "1.  **事件系统/通知系统：**当一个对象的状态发生变化时，需要通知其他对象。\n2.  **发布-订阅：**观察者模式是发布-订阅模型的一种实现方式。发布者（被观察者）发布消息，订阅者（观察者）接收并处理消息。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-30",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "事件系统",
    "date": "2024-07-22",
    "cover": "🎮",
    "excerpt": "一、 委托与事件 1.1 委托 delegate是一个关键字，用来声明委托类型，Delegate是一个类，是委托类型的基类，但只有系统和编辑器可以显示地从Delegate类或者MulticastDelegate类派生，通常我们使用deleg...",
    "sections": [
      {
        "heading": "1.1 委托",
        "paragraphs": [
          "**delegate**是一个**关键字**，用来声明委托类型，**Delegate**是一个类，是**委托类型的基类**，但只有**系统和编辑器**可以显示地从**Delegate类**或者**MulticastDelegate类**派生，通常我们使用delegate关键字来定义委托类型。",
          "委托是一种**引用类型(类似于函数指针)**，允许我们封装方法的引用，通过使用委托，我们可以将方法作为参数传递给其他方法，或者将方法类型组合在一起，从而实现更加灵活地编程。"
        ]
      },
      {
        "heading": "1.2 事件",
        "paragraphs": [
          "事件是一种特殊的委托实例化，用于外部接口，事件基于委托而并非委托，可以看成**委托的代理**，外部类只能通过`+=`和`-=`来注册和注销事件，而不能主动触发事件。"
        ]
      },
      {
        "heading": "1.3 委托与事件的区别",
        "paragraphs": [
          "1.  事件是对委托的包装，保护了委托字段，对外不开放，只提供添加和移除事件的方法。\n2.  事件的触发是在对象的内部。\n3.  事件是一种更安全、更易用的方式来处理回调。"
        ]
      },
      {
        "heading": "二、事件系统",
        "paragraphs": [
          "-   **EventManager**: 事件管理系统类, 包括了注册、注销、广播事件， 其中能够监听5个以内的事件",
          "```csharp\nusing LFrameWork;\nusing System;\nusing System.Collections.Generic;",
          "namespace Client.Event\n{\n    public class EventManager\n    {\n        private Dictionary<EventType, Delegate> _eventTable;\n        protected override void OnInit()\n        {\n            _eventTable = new Dictionary<EventType, Delegate>();\n        }",
          "private void OnListenerAdding(EventType eventType, Delegate action)\n        {\n            if (!_eventTable.ContainsKey(eventType)) \n            {\n                _eventTable.Add(eventType, null);\n            }\n            Delegate @delegate = _eventTable[eventType];\n            if (@delegate != null && @delegate.GetType() != action.GetType())\n            {\n                GameLogger.LogError($\"事件添加的类型不同, {eventType} DelagateType{@delegate.GetType()} actionType {action.GetType()}\");\n            }\n        }",
          "public void RegisterEvent(EventType eventType, CallBack action) \n        {\n            OnListenerAdding(eventType, action);\n            if (_eventTable.TryGetValue(eventType, out var @delegate))\n            {\n                _eventTable[eventType] = (CallBack)@delegate + action;\n            }\n        }",
          "public void RegisterEvent<T>(EventType eventType, CallBack<T> action)\n        {\n            OnListenerAdding(eventType, action);\n            if (_eventTable.TryGetValue(eventType, out var @delegate))\n            {\n                _eventTable[eventType] = (CallBack<T>)@delegate + action;\n            }\n        }",
          "public void RegisterEvent<T, X>(EventType eventType, CallBack<T, X> action)\n        {\n            OnListenerAdding(eventType, action);\n            if (_eventTable.TryGetValue(eventType, out var @delegate))\n            {\n                _eventTable[eventType] = (CallBack<T, X>)@delegate + action;\n            }\n        }",
          "public void RegisterEvent<T, X, Y>(EventType eventType, CallBack<T, X, Y> action)\n        {\n            OnListenerAdding(eventType, action);\n            if (_eventTable.TryGetValue(eventType, out var @delegate))\n            {\n                _eventTable[eventType] = (CallBack<T, X, Y>)@delegate + action;\n            }\n        }",
          "public void RegisterEvent<T, X, Y, Z>(EventType eventType, CallBack<T, X, Y, Z> action)\n        {\n            OnListenerAdding(eventType, action);\n            if (_eventTable.TryGetValue(eventType, out var @delegate))\n            {\n                _eventTable[eventType] = (CallBack<T, X, Y, Z>)@delegate + action;\n            }\n        }",
          "public void RegisterEvent<T, X, Y, Z,W>(EventType eventType, CallBack<T, X, Y, Z,W> action)\n        {\n            OnListenerAdding(eventType, action);\n            if (_eventTable.TryGetValue(eventType, out var @delegate))\n            {\n                _eventTable[eventType] = (CallBack<T, X, Y, Z, W>)@delegate + action;\n            }\n        }",
          "private void OnListenerRemoving(EventType eventType, Delegate callBack)\n        {\n            if (_eventTable.ContainsKey(eventType))\n            {\n                Delegate @delegate = _eventTable[eventType];\n                if (@delegate == null)\n                {\n                    GameLogger.LogError($\"移除监听错误: 事件{eventType}没有对应的委托\");\n                }\n                else if (@delegate.GetType() != callBack.GetType())\n                {\n                    GameLogger.LogError($\"移除监听错误: 尝试为事件{eventType}移除不同类型的委托，当前委托类型为{@delegate.GetType()}，要移除的类型为{callBack.GetType()}\");\n                }\n                else\n                {\n                    GameLogger.LogError($\"移除监听错误: 没有事件码 {eventType}\");\n                }\n            }\n        }",
          "private void OnListenerRemoved(EventType eventType)\n        {\n            if (_eventTable[eventType] == null) _eventTable.Remove(eventType);\n        }",
          "public void UnRegisterEvent(EventType eventType, CallBack callBack) \n        {\n            OnListenerRemoving(eventType, callBack);\n            _eventTable[eventType] = (CallBack)_eventTable[eventType] - callBack;\n            OnListenerRemoved(eventType);\n        }",
          "public void UnRegisterEvent<T>(EventType eventType, CallBack<T> callBack)\n        {\n            OnListenerRemoving(eventType, callBack);\n            _eventTable[eventType] = (CallBack<T>)_eventTable[eventType] - callBack;\n            OnListenerRemoved(eventType);\n        }",
          "public void UnRegisterEvent<T, X>(EventType eventType, CallBack<T, X> callBack)\n        {\n            OnListenerRemoving(eventType, callBack);\n            _eventTable[eventType] = (CallBack<T, X>)_eventTable[eventType] - callBack;\n            OnListenerRemoved(eventType);\n        }",
          "public void UnRegisterEvent<T, X, Y>(EventType eventType, CallBack<T, X, Y> callBack)\n        {\n            OnListenerRemoving(eventType, callBack);\n            _eventTable[eventType] = (CallBack<T, X, Y>)_eventTable[eventType] - callBack;\n            OnListenerRemoved(eventType);\n        }",
          "public void UnRegisterEvent<T, X, Y, Z>(EventType eventType, CallBack<T, X, Y, Z> callBack)\n        {\n            OnListenerRemoving(eventType, callBack);\n            _eventTable[eventType] = (CallBack<T, X, Y, Z>)_eventTable[eventType] - callBack;\n            OnListenerRemoved(eventType);\n        }",
          "public void UnRegisterEvent<T, X, Y, Z, W>(EventType eventType, CallBack<T, X, Y, Z, W> callBack)\n        {\n            OnListenerRemoving(eventType, callBack);\n            _eventTable[eventType] = (CallBack<T, X, Y, Z, W>)_eventTable[eventType] - callBack;\n            OnListenerRemoved(eventType);\n        }",
          "public void BroadCast(EventType eventType)\n        {\n            try\n            {\n                if (_eventTable.TryGetValue(eventType, out var @delegate))\n                {\n                    CallBack callBack = @delegate as CallBack;\n                    callBack?.Invoke();\n                }\n            }\n            catch\n            {\n                GameLogger.LogError($\"BroadCast EventType {eventType} error\");\n            }",
          "}\n        public void BroadCast<T>(EventType eventType, T arg)\n        {\n            try\n            {\n                if (_eventTable.TryGetValue(eventType, out var @delegate))\n                {\n                    CallBack<T> callBack = @delegate as CallBack<T>;\n                    callBack?.Invoke(arg);\n                }\n            }\n            catch\n            {\n                GameLogger.LogError($\"BroadCast EventType {eventType} error\");\n            }\n        }",
          "public void BroadCast<T, X>(EventType eventType, T arg1, X arg2)\n        {\n            try\n            {\n                if (_eventTable.TryGetValue(eventType, out var @delegate))\n                {\n                    CallBack<T, X> callBack = @delegate as CallBack<T, X>;\n                    callBack?.Invoke(arg1, arg2);\n                }\n            }\n            catch\n            {\n                GameLogger.LogError($\"BroadCast EventType {eventType} error\");\n            }\n        }",
          "public void BroadCast<T, X, Y>(EventType eventType, T arg1, X arg2, Y arg3)\n        {\n            try\n            {\n                if (_eventTable.TryGetValue(eventType, out var @delegate))\n                {\n                    CallBack<T, X, Y> callBack = @delegate as CallBack<T, X, Y>;\n                    callBack?.Invoke(arg1, arg2, arg3);\n                }\n            }\n            catch\n            {\n                GameLogger.LogError($\"BroadCast EventType {eventType} error\");\n            }\n        }",
          "public void BroadCast<T, X, Y, Z>(EventType eventType, T arg1, X arg2, Y arg3, Z arg4)\n        {\n            try\n            {\n                if (_eventTable.TryGetValue(eventType, out var @delegate))\n                {\n                    CallBack<T, X, Y, Z> callBack = @delegate as CallBack<T, X, Y, Z>;\n                    callBack?.Invoke(arg1, arg2, arg3, arg4);\n                }\n            }\n            catch\n            {\n                GameLogger.LogError($\"BroadCast EventType {eventType} error\");\n            }\n        }",
          "public void BroadCast<T, X, Y, Z, W>(EventType eventType, T arg1, X arg2, Y arg3, Z arg4, W arg5)\n        {\n            try\n            {\n                if (_eventTable.TryGetValue(eventType, out var @delegate))\n                {\n                    CallBack<T, X, Y, Z, W> callBack = @delegate as CallBack<T, X, Y, Z, W>;\n                    callBack?.Invoke(arg1, arg2, arg3, arg4, arg5);\n                }\n            }\n            catch\n            {\n                GameLogger.LogError($\"BroadCast EventType {eventType} error\");\n            }\n        }",
          "protected override void OnRelease()\n        {\n            _eventTable.Clear();\n        }\n    }\n}\n```",
          "-   **EventType**: 事件系统类型(枚举值)\n    \n    ```csharp\n    namespace Client.Event\n    {\n      public enum EventType\n      {\n          Main,\n      }\n    }\n    ```\n    \n-   **CallBack**: 事件委托类型\n    \n    ```csharp\n    namespace Client.Event\n    {\n      public delegate void CallBack();\n      public delegate void CallBack(T arg);\n      public delegate void CallBack(T arg1, X arg2);\n      public delegate void CallBack(T arg1, X arg2, Y arg3);\n      public delegate void CallBack(T arg1, X arg2, Y arg3, Z arg4);\n      public delegate void CallBack(T arg1, X arg2, Y arg3, Z arg4, W arg5);\n    \n    }\n    ```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-31",
    "tags": [
      "行为型设计模式",
      "设计模式"
    ],
    "categoryId": "pattern",
    "title": "状态者模式",
    "date": "2024-07-22",
    "cover": "🏗️",
    "excerpt": "一、概念 状态模式是一种较为复杂的行为型设计模式，它用于解决系统中复杂对象的状态转换以及不同状态下行为的封装问题。当系统的某个对象存在多个状态时，这些状态可以互相转换，而且对象在不同的状态下行为也不相同。 很多时候状态切换表示会用if-el...",
    "sections": [
      {
        "heading": "一、概念",
        "paragraphs": [
          "状态模式是一种较为复杂的行为型设计模式，它用于解决系统中复杂对象的**状态转换**以及**不同状态下行为的封装问题**。当系统的某个对象存在多个状态时，这些状态可以互相转换，而且对象在不同的状态下行为也不相同。",
          "很多时候状态切换表示会用`if-else` 或者`switch` 来表示状态，这会导致代码的可维护性和灵活度下降，当出现新的状态时，需要修改客户端代码，不符合**开闭原则**。状态模式将对象的状态分离，封装到专门的状态类中，使对象可以灵活变化。",
          "**定义:**允许一个对象在**其内部状态改变时改变其行为**。"
        ]
      },
      {
        "heading": "二、模式结构",
        "paragraphs": [
          "-   **Context（环境类）:**又称上下文类，它是拥有多种状态的对象，维护一个抽象`State`的实例，该实例用来定义当前状态。\n    \n-   **State(抽象状态类):**它用户定义一个接口以封装与环境类的一个特定状态相关的行为，在抽象状态中声明了各种不同状态对应的方法。\n    \n-   **ConcreteState（具体状态类）:**它是抽象状态类的子类，每一个子类实现一个与环境类状态相关的行为。\n    \n    ![image-20240722141655701](@img/0uahijj5)"
        ]
      },
      {
        "heading": "三、具体实现",
        "paragraphs": [
          "-   **Fsm类**:环境类",
          "```csharp\n public abstract class FsmBase\n {\n     public string Name { get; protected set; }\n     public string FullName { get; protected set; }\n     public int FsmStateCount { get; protected set; }\n     // 是否在运行\n     public bool IsRunning { get; protected set; }\n     //是否被销毁\n     public bool IsDestory { get; protected set; }",
          "public FsmState CurrentState { get; protected set; }",
          "public object Owner;\n     public abstract void Start<TState>();",
          "public abstract bool HasState<TState>();",
          "public abstract FsmState GetState<TState>();",
          "public abstract FsmState[] GetAllStates();",
          "public abstract void ChangeState<TState>();\n     public abstract void OnUpdate(float elapseSeconds, float realElapseSeconds);\n     public abstract void OnRelease();\n }",
          "public class Fsm : FsmBase\n{\n    private readonly Dictionary<Type, FsmState> _states;\n    public Fsm() \n    {\n        CurrentState = null;\n        IsRunning = true;\n        IsDestory = false;\n        _states = new Dictionary<Type, FsmState>();\n    }",
          "public static Fsm Create<T>(string name, T owner, FsmState[] states)\n    {\n        if (owner == null)\n        {\n            GameLogger.LogError(\"Fsm owner is invaild\");\n            return null;\n        }\n        if (states == null || states.Length == 0)\n        {\n            GameLogger.LogError(\"Fsm states is invaild\");\n            return null;\n        }\n        // TODO:对象池获得Fsm状态机\n        Fsm fsm = new Fsm();\n        fsm.Name = name;\n        fsm.Owner = owner;\n        fsm.IsDestory = false;\n        fsm.IsRunning = true;",
          "foreach (var state in states)\n        {\n            if (state == null)\n            {\n                GameLogger.LogError(\"Fsm states is invaild\");\n                return null;\n            }\n            Type stateType = state.GetType();\n            if (fsm._states.ContainsKey(stateType))\n            {\n                GameLogger.LogError($\"Fsm {typeof(T)} state {stateType.FullName} is already exist.\");\n            }\n            state.fsm = fsm;\n            fsm._states.Add(stateType, state);\n            state.OnInit();\n        }\n        return fsm;\n    }",
          "public override void ChangeState<TState>()\n    {\n        if (CurrentState == null)\n        {\n            GameLogger.LogError(\"Current state is invaild\");\n            return;\n        }",
          "FsmState state = GetState<TState>();\n        if (state == null)\n        {\n            GameLogger.LogError($\"Fsm {Name} can't change state to {typeof(TState).FullName}\");\n            return;\n        }\n        CurrentState.OnExit(false);\n        CurrentState = state;\n        CurrentState.OnEnter();\n    }",
          "public override FsmState[] GetAllStates()\n    {\n        int index = 0;\n        FsmState[] results = new FsmState[_states.Count];\n        foreach (var state in _states)\n        {\n            results[index ++] = state.Value;\n        }\n        return results;\n    }",
          "public override FsmState GetState<TState>()\n    {\n        FsmState state = null;\n        if (_states.TryGetValue(typeof(TState), out state))\n        {\n            return state;\n        }\n        return null;\n    }",
          "public override bool HasState<TState>()\n    {\n        return _states.ContainsKey(typeof(TState));\n    }",
          "public override void Start<TState>()\n    {\n        if (IsRunning)\n        {\n            GameLogger.LogError(\"Fsm is Running, can't start again\");\n            return;\n        }\n        FsmState state = GetState<TState>();\n        if (state == null)\n        {\n            GameLogger.LogError($\"Fsm {Name} can't not start state {typeof(TState).FullName} which is not exist\");\n            return;\n        }",
          "CurrentState = state;\n        CurrentState.OnEnter();\n    }",
          "public override void OnUpdate(float elapseSeconds, float realElapseSeconds)\n    {\n        if (CurrentState == null) return;",
          "CurrentState.OnUpdate(elapseSeconds, realElapseSeconds);\n    }",
          "public override void OnRelease()\n    {\n        if (CurrentState != null)\n        {\n            CurrentState.OnExit(true);\n        }",
          "foreach (var state in _states)\n        {\n            state.Value.OnDestory();\n        }",
          "Name = null;\n        _states.Clear();\n        CurrentState = null;\n        IsDestory = true;\n        IsRunning = false;\n    }\n}\n```",
          "-   **FsmState类**:抽象状态类",
          "```csharp\npublic abstract class FsmState\n{\n    public FsmBase fsm;\n    public FsmState()\n    {\n        fsm = null;\n    }",
          "protected internal virtual void OnInit(){ }\n    protected internal virtual void OnEnter() { }\n    protected internal virtual void OnUpdate(float elapseSeconds, float realElapseSeconds) { }\n    protected internal virtual void OnExit(bool isShutDown) { }\n    protected internal virtual void OnDestory() { }",
          "protected void ChangeState<TState>()\n    {\n        try\n        {\n            if (fsm == null)\n            {\n                GameLogger.LogError(\"FSM is Invaild\");\n            }\n            fsm.ChangeState<TState>();\n        }\n        catch\n        {\n            GameLogger.LogError($\"Fsm ChangeState error\");\n        }",
          "}\n}\n```"
        ]
      },
      {
        "heading": "四、优缺点",
        "paragraphs": [
          "-   **优点:**\n    1.  **结构清晰**:状态模式将状态相关的代码组织在一起，符合单一原则。\n    2.  **分离状态转换逻辑:**状态转换的逻辑被封装在状态类中，与上下文对象分离，易于扩展和转换逻辑。\n    3.  **提高可拓展性和可维护性:**对象的状态和行为被分离，使系统更易于扩展和维护。\n-   **缺点:**\n    1.  **类的个数增加**:如果状态过多会导致类的个数增加，从而增加系统复杂度。\n    2.  **开闭原则:**在判断状态转换时，每一次增加一个状态就要修改状态转换的代码。"
        ]
      },
      {
        "heading": "五、适用环境",
        "paragraphs": [
          "1.  对象的行为依赖于它的状态，状态的改变将导致行为的改变。\n2.  存在多个状态且可以互相转换。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-32",
    "tags": [
      "Tools"
    ],
    "categoryId": "tools",
    "title": "JDK安装",
    "date": "2024-07-23",
    "cover": "🔧",
    "excerpt": "一、进入官网下载对应的安装文件 JDK官方链接 根据系统选择相应的exe文件进行安装，点击安装包，进行jdk傻瓜式流程安装。 二、配置JDK环境变量 安装完毕后，配置一下JDK的环境变量，打开系统环境变量。 配置JAVA_HOME:变量名:...",
    "sections": [
      {
        "heading": "一、进入官网下载对应的安装文件",
        "paragraphs": [
          "[JDK官方链接](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)",
          "根据系统选择相应的`exe`文件进行安装，点击安装包，进行`jdk`傻瓜式流程安装。",
          "![image-20240723154943483](@img/caqjmxbn)"
        ]
      },
      {
        "heading": "二、配置JDK环境变量",
        "paragraphs": [
          "安装完毕后，配置一下JDK的环境变量，打开系统环境变量。",
          "-   **配置JAVA\\_HOME:**变量名:JAVA\\_HOME 变量值: C:\\\\Program Files\\\\Java\\\\jdk-17 (安装路径)",
          "![image-20240723155130087](@img/t9tvpr34)",
          "-   **配置Path:**点击Path环境变量，新增变量值：%JAVA\\_HOME%\\\\bin;%JAVA\\_HOME%\\\\jre\\\\bin",
          "![image-20240723155153860](@img/fdqadwix)",
          "-   **配置CLASSPATH:**变量名: CLASSPATH 变量值: .;%JAVA\\_HOME%\\\\lib;%JAVA\\_HOME%\\\\lib\\\\tools.jar (前面有**.;**)",
          "![image-20240723155141922](@img/fln3xlmk)"
        ]
      },
      {
        "heading": "三、验证环境变量",
        "paragraphs": [
          "按键盘的 `window + R`，输入`cmd`，进入命令行输入`java -version`回车，若显示下图则表示配置成功.",
          "![image-20240723160234761](@img/4pd3la9r)",
          "**如果以上配置都对，但是一直没有验证成功，可以重启电脑后再测试。**"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-33",
    "tags": [
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "高精度运算（加减乘除）",
    "date": "2024-08-23",
    "cover": "📐",
    "excerpt": "一、高精度是什么？ 高精度算法：是处理大数字的数学计算方法。在一般的科学计算中，会经常算到小数点后几百位或者更多，当然也可能是几千亿几百亿的大数字。一般这类数字我们统称为高精度数，高精度算法是用计算机对于超大数据的一种模拟加，减，乘，除，乘...",
    "sections": [
      {
        "heading": "一、高精度是什么？",
        "paragraphs": [
          "**高精度算法**：是处理大数字的数学计算方法。在一般的科学计算中，会经常算到小数点后几百位或者更多，当然也可能是几千亿几百亿的大数字。一般这类数字我们统称为高精度数，高精度算法是用计算机对于超大数据的一种模拟加，减，乘，除，乘方，阶乘，开方等运算。对于非常庞大的数字无法在计算机中正常存储，于是，将这个数字拆开，拆成一位一位的，或者是四位四位的存储到一个数组中， 用一个数组去表示一个数字，这样这个数字就被称为是高精度数。高精度算法就是能处理高精度数各种运算的算法。"
        ]
      },
      {
        "heading": "二、高精度乘法",
        "paragraphs": [
          "```cpp\n#include<iostream>\n#include<algorithm>\n#include<vector> \nusing namespace std;\nvector<int> add(vector<int>A, vector<int>B){\n    //A:765, B:321 \n    vector<int>C;\n    int t = 0; //中间运算的数 \n    //从7 + 3到 2 + 6 最后是 5 + 1 \n    for(int i = 0; i < A.size() || i < B.size(); i ++){\n        if(i < A.size()) t += A[i];\n        if(i < B.size()) t += B[i];\n        C.push_back(t % 10);//7 + 3 = 10 % 10 = 0; \n        t = t / 10; \n    }\n    //t不是为1就是为0 \n    if(t) C.push_back(t);\n    return C;\n}\nint main(){\n    //数字比较大必须用字符串输入\n    string a, b;\n    cin >> a >> b;\n    vector<int>A,B;\n    //如果a为567 A就是765, b为123, B为321 \n    for(int i = a.size() - 1; i >= 0; i --) A.push_back(a[i] - '0');\n    for(int i = b.size() - 1; i >= 0; i --) B.push_back(b[i] - '0');\n    vector<int>C;\n    C = add(A, B);\n    for(int i = C.size() - 1; i >= 0; i --) cout << C[i] ; \n    return 0;\n}\n```"
        ]
      },
      {
        "heading": "三、高精度减法",
        "paragraphs": [
          "```cpp\n#include<iostream>\n#include<algorithm>\n#include<vector>\nusing namespace std;",
          "bool cmp(vector<int>A, vector<int>B){\n    if(A.size() != B.size()) return A.size() > B.size();\n    for(int i = A.size() - 1; i >= 0; i --){\n        if(A[i] != B[i]) return A[i] > B[i];\n    }\n    return true;\n}",
          "vector<int>sub(vector<int>A, vector<int>B){\n    vector<int>C;\n    int t = 0;\n    for(int i = 0; i < A.size(); i ++){\n        t = A[i] - t;\n        if(i < B.size()) t -= B[i];\n        C.push_back((t + 10) % 10);\n        if(t < 0) t = 1;\n        else t = 0;\n    }\n    while(C.size() > 1 && C.back() == 0) C.pop_back();\n    return C;\n}",
          "int main(){\n    string a, b;\n    cin >> a >> b;\n    vector<int>A,B;\n    for(int i = a.size() - 1; i >= 0; i --) A.push_back(a[i] - '0');\n    for(int i = b.size() - 1; i >= 0; i --) B.push_back(b[i] - '0');\n    vector<int>C;\n    if(cmp(A, B)){\n        C = sub(A, B);\n        for(int i = C.size() - 1; i >= 0; i --) cout << C[i];\n    }\n    else{\n        C = sub(B, A);\n        cout << \"-\";\n        for(int i = C.size() - 1; i >= 0; i --) cout << C[i];\n    }\n    return 0;\n} \n```"
        ]
      },
      {
        "heading": "四、高精度乘法",
        "paragraphs": [
          "```cpp\n#include<iostream>\n#include<vector>\nusing namespace std;",
          "vector<int>mul(vector<int>A, int b){\n    vector<int>C;\n    int t = 0;\n    for(int i = 0; i < A.size() || t; i ++){\n        if(i < A.size()) t += A[i] * b;\n        C.push_back(t % 10);\n        t /= 10; \n    }\n    while(C.size() > 1 && C.back() == 0) C.pop_back();\n    return C;\n}",
          "int main(){\n    string a;\n    int b;\n    cin >> a >> b;\n    vector<int>A;\n    //789 -> 987\n    for(int i = a.size() - 1; i >= 0; i --) A.push_back(a[i] - '0');\n    vector<int>C;\n    C = mul(A, b);\n    for(int i = C.size() - 1; i >= 0; i --) cout << C[i] ;\n    return 0;\n}\n```"
        ]
      },
      {
        "heading": "五、高精度除法",
        "paragraphs": [
          "```cpp\n#include<iostream>\n#include<vector>\n#include<algorithm>\nusing namespace std;",
          "vector<int> div(vector<int>A, int b, int &r){\n    vector<int>C;\n    r = 0;\n    for(int i = A.size() - 1; i >= 0; i --){\n        r = r * 10 + A[i];\n        C.push_back(r / b);\n        r = r % b;\n    }\n    reverse(C.begin(), C.end());\n    while(C.size() > 1 && C.back() == 0) C.pop_back();\n    return C;\n}",
          "int main(){\n    string a;\n    int b, r;\n    cin >> a >> b;\n    vector<int>A;\n    for(int i = a.size() - 1; i >= 0; i --) A.push_back(a[i] - '0');\n    vector<int>C;\n    C = div(A, b, r);\n    for(int i = C.size() - 1; i >= 0; i --) cout << C[i];\n    cout << endl << r << endl; \n    return 0;\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-34",
    "tags": [
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "哈希表与哈希冲突（Hash表 散列表）",
    "date": "2024-08-23",
    "cover": "📐",
    "excerpt": "一、哈希表是什么？ 哈希表（Hash table 又叫散列表）是能够通过给定的关键字的值直接访问到具体对应的值的一个数据结构。通常，我们把这个关键字称为Key值，对应的值称为Value值。关键值和Value值是一种一一对应的关系（也就是映射...",
    "sections": [
      {
        "heading": "一、哈希表是什么？",
        "paragraphs": [
          "**哈希表（Hash table 又叫散列表）**是能够通过给定的关键字的值直接访问到具体对应的值的一个数据结构。通常，我们把这个关键字称为**Key值**，对应的值称为**Value值**。关键值和Value值是一种**一一对应**的关系（也就是映射关系），这个映射表，也叫做哈希函数，存放记录的数组就是哈希表。**哈希表也类似于离散化。**",
          "**哈希表的作用：**哈希表的作用就是能够通过**Key值**快速获取**Key对应的Value值，**它查询的时间复杂度几乎是O（1）的。"
        ]
      },
      {
        "heading": "二、哈希冲突",
        "paragraphs": [
          "我们要先了解一下：映射值和Key值",
          "**注意：**",
          "1.  **映射值**：哈希函数下计算出来的值， **Key值：Value一一对应的位置值**\n2.  当在**理想状况**下（没有哈希冲突时，不存在这样的情况），哈希函数计算出来的**映射值 == key值**\n3.  在处理哈希冲突时，哈希函数计算出来的是映射值，key值是存放Value值的位置",
          "**哈希冲突：**当两个不同的数**（Value值）**经过哈希函数运算得到同一个结果**映射值**时，就说明发生了哈希冲突。可以用一个例子来说：查询手机通讯录，你可以把通讯录的首字母查找**（A~Z）**比作**映射值**， 名字比作**Value值**，假如你的通讯录有张三和张伟，那他们的**映射值**值都是**Z**，那么当你用**Z（映射值）**查找时，**Value**值却有两个，**key值也有两个（Zhangsan和Zhangwei）**。这就是哈希冲突",
          "图解：![img](@img/97yxglxh)"
        ]
      },
      {
        "heading": "三、如何避免哈希冲突",
        "paragraphs": [
          "我在写这篇文章的时候，我一开始写的是如何避免哈希冲突**（× 错误的）**。**注意：**哈希冲突是**无法避免**的，我们只能减少冲突，所以处理冲突是哈希表不可缺少的一部分。",
          "**处理冲突**有很多方法，例如开放寻址法、再散列法、拉链法、建立公共溢出区等。在这我就主要讲一下**开放寻址法**和**拉链法。**"
        ]
      },
      {
        "heading": "3.1.开放寻址法及代码",
        "paragraphs": [
          "**开放寻址法**：哈希表是通过数组存储的，所以当我们用开放寻址法的时候就要创建一个**足够大的数组（一般开数值数量的2~3倍）（开放），**然后通过**哈希函数计算得到映射值**，找到能存放**Value的位置（key值）**。可以分为2个步骤：插入和查找。",
          "**插入：**通过find函数来寻找一个地址**（寻址）**放置数值，若不为空，则查找下一个位置，直到找到个空位置或者这个数已经存在了。",
          "**查找**：**如果数组存在这个数值，就返回该值的地址，否则，返回**NULL\\*\\*;",
          "```cpp\nint find(int x){    //返回位置值\n    int k = (x % N + N) % N; ////哈希函数计算映射值\n    //如果该位置的值不为空表示有其他的值已经将该位置占领了\n    //如果该位置等于x值，说明x已经存在了，不需要在占位置了，直接返回存在的位置\n    while(h[k] != null && h[k] != x) { \n        k ++;            //k ++表示一直向后查找\n        if(k == N) k = 0; //如果查找到数组的尾部了，就从头部开始找。\n    }\n    return k;//现在k表示Key值。\n}\n```",
          "**完整代码**：",
          "```cpp\n///开放寻址法\n#include<iostream>\n#include<cstring>\nusing namespace std;\nconst int N = 2e5 + 3, null = 0x3f3f3f3f;\nint n, h[N];\nint find(int x){\n    int t = (x % N + N) % N;\n    while(h[t] != null && h[t] != x) {\n        t ++;\n        if(t == N) t = 0;\n    }\n    return t;\n}",
          "int main(){\n    cin >> n;\n    memset(h, 0x3f3f3f3f, sizeof h);\n    while(n --){\n        char op;\n        int x;\n        cin >> op >> x;\n        if(op == 'I') h[find(x)] = x; //插入操作\n        else {\n            if(h[find(x)] == null) puts(\"No\");//查找操作\n            else puts(\"Yes\");\n        }\n    }\n    return 0;\n}\n```"
        ]
      },
      {
        "heading": "3.2.拉链法及代码",
        "paragraphs": [
          "**拉链法：**这种方法的关键是把**哈希函数运算的映射值都**放到数组中，然后以**映射值作头结点创建链表**。利用**链表**来存储**Value值，找到key值对应的位置（下面有图解）。分两个步骤：插入和查询**",
          "**插入：**利用**单链表**的形式插入以**映射值**为头结点的链表。",
          "**查找：也是单链表的查找方式**",
          "**图解：**",
          "![img](@img/fw818yk9)",
          "**插入代码：**",
          "```cpp\nvoid insert (int x){\n    int k = (x % N + N) % N;//哈希函数计算映射值\n    e[idx] = x;\n    ne[idx] = h[k];\n    h[k] = idx  ++;\n}\n```",
          "**查找代码：**",
          "```cpp\nbool find (int x ){\n    int k=(x % N + N) % N;//哈希函数计算映射值\n    for(int i=h[k];i!=-1;i= ne[i]) \n    if(e[i]==x ) return true;//找到返回True\n    return  false;\n}\n```",
          "**完整代码：**",
          "```cpp\n#include<iostream>\n#include<cstring>\nusing namespace std; \nconst int N = 100003;\nint h[N],e[N],ne[N],idx;",
          "//头插法 \nvoid insert (int x){\n    int k=(x % N + N) % N;\n    e[idx] = x;\n    ne[idx] = h[k];\n    h[k] = idx  ++;\n}",
          "bool find (int x ){\n    int k=(x % N + N) % N;\n    for(int i=h[k];i!=-1;i= ne[i]) \n    if(e[i]==x ) return true;\n    return  false;\n}",
          "int main(){\n    int n;\n    cin>>n;\n    memset(h,-1,sizeof h);//头结点赋值\n    while(n--){\n        string op;\n        int x;\n        cin>>op>>x;\n        if( op== \"I\") insert(x);//插入\n        else {\n            if(find(x)) puts(\"Yes\");//查找\n            else puts(\"No\"); \n        }\n    }\n    return 0;\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-35",
    "tags": [
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "堆（手写堆包含STL）",
    "date": "2024-08-23",
    "cover": "📐",
    "excerpt": "一、堆的定义： 堆是什么，堆就像是一个金字塔，最顶端的是最值（最大值和最小值），堆其实就是一个二叉树，将最值元素放到根节点。子节点要么都小于父节点，要么都大于父节点。但是写手堆的话，我们用的是数组来存储，所以堆通常也被看做一颗树的数组对象。...",
    "sections": [
      {
        "heading": "一、堆的定义：",
        "paragraphs": [
          "堆是什么，堆就像是一个金字塔，最顶端的是最值（最大值和最小值），堆其实就是一个二叉树，将最值元素放到根节点。子节点要么都小于父节点，要么都大于父节点。但是写手堆的话，我们用的是数组来存储，所以堆通常也被看做一颗树的数组对象。"
        ]
      },
      {
        "heading": "2.1 堆的分类：",
        "paragraphs": [
          "大根堆和小根堆，根节点最大的堆叫大根堆，根节点最小的堆叫小根堆。"
        ]
      },
      {
        "heading": "2.2 STL的定义：",
        "paragraphs": [
          "首先要调用堆的头文件: #include",
          "priority\\_queueheap;//默认的是大根堆",
          "priority\\_queue<int, vector, greater\\>heap；小根堆",
          "堆的函数：",
          "-   size();//堆的大小\n    \n-   empty();//堆是否为空\n    \n-   push();//插入一个元素\n    \n-   top();//返回栈顶元素\n    \n-   pop();//删除一个元素"
        ]
      },
      {
        "heading": "3.3 堆的性质：",
        "paragraphs": [
          "-   堆是一颗完全二叉树，只不过用数组实现。\n-   堆中的数据不是完全有序的，它只是每个子节点的值大于或小于父节点的值"
        ]
      },
      {
        "heading": "3.1 手写堆的思想：",
        "paragraphs": [
          "我们用数组的思想来存储堆，总共分为三个函数模块，五个操作模块。**（模拟小根堆）**",
          "-   函数模块：\n    \n    1.  h\\_swap()；//交换节点的位置和值\n        \n    2.  up()；//将节点值与父节点比较往上移\n        \n    3.  down；//将节点值与子节点比较往下移\n        \n-   操作模块：size:堆的大小，k:堆的第k个值（后面两个操作STL是不能实现的）\n    \n    1.  插入一个数值:heap\\[size ++\\] = x; up(size);\n    2.  删除最小值：heap\\[1\\] = heap\\[size\\]; size --;down(1);\n    3.  求集合中的最小值：heap\\[1\\];\n    4.  删除任意第k个值: heap\\[k\\] = heap\\[size\\]; size --; down(k); up(k);\n    5.  修改任意第k个值：heap\\[k\\] = x;down(k);up(k);"
        ]
      },
      {
        "heading": "3.2 函数模块代码：",
        "paragraphs": [
          "**h\\_swap():交换节点（有点难懂）**",
          "```cpp\nvoid h_swap(int a, int b){\n    swap(ph[hp[a]],ph[hp[b]]);\n    swap(hp[a], hp[b]);\n    swap(h[a], h[b]);\n} \n```",
          "**理解 + 图解：这里是一种映射关系，p表示外部指针，h表示堆的位置（也可以理解为内部指针）**",
          "1.  ph\\[ \\]：表示外部指针指向内部指针\n2.  hp\\[ \\]：表示内部指针指向外部指针\n3.  h\\[ \\]：表示存放的数值",
          "![img](@img/u51wfkxd)",
          "**up();//节点上移操作：**",
          "```cpp\nvoid up(int u){\n    if(u / 2 && h[u / 2] > h[u]){//如果小于根节点，就与根节点置换\n        swap(u, u / 2);\n        up(u / 2);\n    }\n}\n```",
          "![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)",
          "**down();//节点下移操作：**",
          "```cpp\nvoid down(int u){\n    int t = u;\n    if(u * 2 <= size && h[u * 2] < h[t]) t = u * 2;//比较左子树\n    if(u * 2 + 1 <= size && h[u * 2 + 1] < h[t]) t = u * 2 + 1;//比较右子树\n    if(u != t){//若左子树或者右子树小于根节点就置换\n        h_swap(u, t);\n        down(t);//不断执行down()\n    }\n}\n```"
        ]
      },
      {
        "heading": "3.3 操作模块：",
        "paragraphs": [
          "-   插入一个值：直接在数组尾部插入并up(szie)（队尾位置）\n-   求集合中最小值：直接返回头部值\n-   删除最小值：\n    1.  这里要涉及一个知识点：为什么要在将头部值和尾部值交换\n    2.  如果我们直接删除头部位置，那么所有的位置都会受到影响，所有置换一下，再删除尾部值，就其他位置就不会收到影响\n    3.  最后我们再up(1), down(1);将头部值放到合适位置\n-   删除第k个元素：与删除最小值是一样的，需要置换尾部位置和第k个值的位置\n-   修改第k个元素：直接将heap\\[k\\] = x，再将x值放到合适位置"
        ]
      },
      {
        "heading": "四、完整代码 + 注释",
        "paragraphs": [
          "```cpp\n#include<iostream>\nusing namespace std;\nconst int N = 1e5 + 10;\nint hp[N], ph[N], h[N], cnt, m;    //m表示ph的映射值，cnt表示大小size\nint n;\nvoid h_swap(int a, int b){\n    swap(ph[hp[a]], ph[hp[b]]);\n    swap(hp[a], hp[b]);\n    swap(h[a], h[b]);\n}",
          "void down(int u){\n    int t = u;\n    if(u * 2 <= cnt && h[u * 2] < h[t]) t = u * 2;\n    if(u * 2 + 1<= cnt && h[u * 2 + 1]< h[t]) t = u * 2 + 1;\n    if(u != t){\n        h_swap(u, t);\n        down(t);\n    }\n}\nvoid up(int u){\n    if(u / 2 && h[u / 2] > h[u]){\n        h_swap(u / 2, u);\n        up(u / 2);\n    }\n}",
          "int main()\n{\n    cin >> n;\n    while(n --){\n        string op;\n        int k, x;\n        cin >> op;\n        //插入操作\n        if(op == \"I\"){\n            cin >> x;\n            cnt ++ ;\n            m ++ ;\n            ph[m] = cnt, hp[cnt] = m;\n            h[cnt] = x;\n            up(cnt);\n        }\n        //返回最小值\n        else if(op == \"PM\") cout << h[1] << endl;\n        //删除头部元素\n        else if(op == \"DM\") {\n            h_swap(1, cnt);\n            cnt --;\n            down(1);\n        }\n        //删除第K个节点\n        else if(op == \"D\"){\n            cin >> k;\n            k = ph[k];\n            h_swap(cnt, k);\n            cnt --;\n            up(k);\n            down(k);\n        }\n        //修改第k个数\n        else {\n            cin >> k >> x;\n            k = ph[k];\n            h[k] = x;\n            up(k);\n            down(k);\n        }\n    }\n    return 0;\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-36",
    "tags": [
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "Trie树(字典树)",
    "date": "2024-08-23",
    "cover": "📐",
    "excerpt": "一、Trie树是什么？ Trie树又称字典树或前缀树，是一种能够快速查找一组字符串含有一个字符串的类似哈希表的树结构，是以空间换时间，利用字符串的前缀来降低查询时间。 与二叉树不同，Trie树有26子节点对应26个字母，根节点不包含字符串，...",
    "sections": [
      {
        "heading": "一、Trie树是什么？",
        "paragraphs": [
          "Trie树又称字典树或前缀树，是一种能够快速查找一组字符串含有一个字符串的类似哈希表的树结构，是以空间换时间，利用字符串的前缀来降低查询时间。",
          "与二叉树不同，Trie树有26子节点对应26个字母，根节点不包含字符串，从根节点到某个节点，经过的字符连起来的字符串就是对应的字符串。当储存结束一个字符串后，尾节点会用cnt\\[ \\]数组来说明该字符串的次数。"
        ]
      },
      {
        "heading": "2.1 字符串插入trie树",
        "paragraphs": [
          "开始先定义 ： `int son[N][26], cnt[N], idx`;",
          "`son[N][26]`:储存子节点的位置，分支最多26条",
          "`cnt[N]`：存储以节点结尾的字符串个数",
          "`idx`：表示当前要插入的节点（新建节点）",
          "**代码如下（示例）：**",
          "```cpp\nvoid insert(string str){\n    int p = 0;//类似指针指向当前节点\n    for(int i = 0; i < str.size(); i ++){\n        int u = str[i] - 'a';        //当前节点是什么字符\n        if(!son[p][u]) son[p][u] = ++ idx;//如果节点不存在就新建节点\n        p = son[p][u];        //p 指向新建的节点\n    }\n    cnt[p] ++;//尾节点的字符数量加1\n}\n```",
          "**图解**：",
          "![img](@img/grhbeh38)"
        ]
      },
      {
        "heading": "2.2 查找字符串",
        "paragraphs": [
          "**代码如下（示例）：**",
          "```c\nint query(char *str)\n{\n    int p = 0;\n    for(int i = 0; str[i]; i++)\n    {\n        int u = str[i] - 'a';\n        if(!son[p][u]) return 0;  //该节点不存在，即该字符串不存在\n        p = son[p][u]; \n    }\n    return cnt[p];  //返回字符串出现的次数\n}\n```"
        ]
      },
      {
        "heading": "2.3 完整代码",
        "paragraphs": [
          "```cpp\n#include<iostream>\nusing namespace std;\nconst int N = 1e5 + 10;\nint son[N][26], cnt[N], idx, n;\nvoid insert(string str){\n    int p = 0;\n    for(int i = 0; i < str.size(); i ++){\n        int u = str[i] - 'a';\n        if(!son[p][u]) son[p][u] = ++ idx;\n        p = son[p][u];\n    }\n    cnt[p] ++;\n}\nint query(string str){\n    int p = 0;\n    for(int i = 0; i < str.size(); i ++){\n        int u = str[i] - 'a';\n        if(!son[p][u]) return 0;\n        p = son[p][u];\n    }\n    return cnt[p];\n}\nint main()\n{\n    ios::sync_with_stdio(false);\n    cin.tie(0);\n    cin >> n;\n    while(n --){\n        string op, str;\n        cin >> op >> str;\n        if(op == \"I\") insert(str);\n        else cout << query(str) << endl;\n    }\n    return 0;\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-37",
    "tags": [
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "KMP算法",
    "date": "2024-08-24",
    "cover": "📐",
    "excerpt": "一、KMP是什么 KMP（Knuth-Morris-Pratt）算法是一种高效的字符串匹配算法，用于在文本中查找模式。它的核心思想是利用已经匹配的信息来避免重复匹配，从而提高效率。 二、暴力字符串匹配 暴时间复杂度O（n * m） //大概...",
    "sections": [
      {
        "heading": "一、KMP是什么",
        "paragraphs": [
          "KMP（Knuth-Morris-Pratt）算法是一种高效的字符串匹配算法，用于在文本中查找模式。它的核心思想是利用已经匹配的信息来避免重复匹配，从而提高效率。"
        ]
      },
      {
        "heading": "二、暴力字符串匹配",
        "paragraphs": [
          "-   暴时间复杂度O（n \\* m）",
          "```cpp\n//大概是这样的，可能有差别，但是模板基本上是这样\nfor (int i = 0; i < m;)\n{\n    int j = 0;\n    while (i < m && j < n && s[i++] == p[j++]);\n    if (j == n)\n    {\n        cout << i - j << \" \";\n    }\n    i = j + 1;\n}\n```"
        ]
      },
      {
        "heading": "三、 KMP匹配",
        "paragraphs": [
          "时间复杂度O(n)"
        ]
      },
      {
        "heading": "3.1 算法理解",
        "paragraphs": [
          "先理解一下专有名词",
          "-   P为模板串，比较短的字符串。\n    \n-   S为模式串，比较长的字符串。\n    \n-   非平凡前缀：除了最后一个字符外，一个字符串的全部头部组合。\n    \n-   非平凡后缀：除了第一个字符外，一个字符串的全部尾部组合。\n    \n-   部分匹配值：前缀和后缀最长共有的元素的长度， 用next\\[\\]数组存储。"
        ]
      },
      {
        "heading": "3.2 KMP的中心思想",
        "paragraphs": [
          "1.  求next\\[\\]数组\n2.  匹配字符串",
          "求next\\[\\]数组：自己和自己匹配字符串而来的,前缀和后缀最长共有的元素的长度,next\\[\\]储存的是最长能匹配**前缀子串结尾字符**的下标。",
          "若字符串p为`ababac`",
          "| 数组 | 模式前缀 | 模式后缀 | 能匹配字符串 |\n| --- | --- | --- | --- |\n| a | NULL | NULL | NULL |\n| ab | a | b | NULL |\n| aba | **a**,ab | ba,**a** | a |\n| abab | a,**ab**,aba | bab,**ab**,b | ab |\n| ababa | a,ab, **aba**,abab | baba,**aba**,ba,a | aba |\n| ababac | a,ab, aba,abab,ababa | babac,abac,bac,ac,c | NULL |",
          "**next\\[\\]数组为：**",
          "| p | a | b | a | b | a | c |\n| --- | --- | --- | --- | --- | --- | --- |\n| 下标 | 1 | 2 | 3 | 4 | 5 | 6 |\n| next\\[\\] | 0 | 0 | 1 | 2 | 3 | 0 |",
          "**2：匹配字符串**",
          "![img](@img/rktt3a2p)",
          "完整代码：",
          "```cpp\n#include <iostream>\nusing namespace std;\nconst int N = 1e5 + 10, M = 1e6 + 10;\nint n, m;\nint ne[N];",
          "void HandleNextArr(char str[]){\n    // 下标从2开始,自身匹配，第一个数据不用计算\n    for(int i = 2, j = 0; i <= n; i ++) { //求next数组\n        while (j && str[i] != str[j + 1]) j = ne[j];\n        if (str[i] == str[j + 1]) j ++;\n        ne[i] = j;\n    }\n}",
          "void MatchStr(char p[], char s[]){\n    HandleNextArr(p);\n    for (int i = 1, j = 0; i <= m; i ++) {\n        while(j && s[i] != p[j + 1]) j = ne[j];\n        if (s[i] == p[j + 1]) j ++;\n        if (j == n) {\n            cout << i - n << \" \";\n            j = ne[j]; \n        }\n    }\n}",
          "int main() {\n    char p[N], s[M];\n    cin >> n >> p + 1 >> m >> s + 1;\n    MatchStr(p, s);\n    return 0;\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-38",
    "tags": [
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "DFS(深度优先算法)",
    "date": "2024-08-26",
    "cover": "📐",
    "excerpt": "一、DFS是什么？ DFS（深度优先搜索算法）：一种用于遍历或者树或者图的算法，是一种递归程序，不断递归达到无法在到达的点，简单点来说：一条路一直走，走到没有路后就原路返回，重新选择另一条 dfs(step + 1)。 DFS = 暴搜 +...",
    "sections": [
      {
        "heading": "一、DFS是什么？",
        "paragraphs": [
          "**DFS（深度优先搜索算法）：**一种用于遍历或者树或者图的算法，是一种递归程序，不断递归达到无法在到达的点，简单点来说：一条路一直走，走到没有路后就原路返回，重新选择另一条 dfs(step + 1)。",
          "**DFS = 暴搜 + 回溯算法 + 剪枝（大多数是这样）。DFS需要回溯算法，其他算法也需要回溯算法，两种是一种调用关系。**",
          "**暴搜**：一条路走到黑（直接递归走到底）",
          "**回溯：DFS** 开启另一条路则需要回溯，如果暴搜那条路找不到答案就要回溯走另外一条道路。",
          "**剪枝**：如果明确接下来的搜索找不到答案或者不是最优解，就不再进行搜索并对路径进行回溯，从而达到减少问题搜索规模的目的。",
          "**图解：（箭头的遍历方式）1 -> 2 -> 4 -> 8 -> 4 -> 2 -> 5 -> 9 - > 5 -> 2 -> 1 -> 3 -> 6 -> 10**",
          "**\\-> 6 -> 3 -> 7。**",
          "![img](@img/uyh0qrax)"
        ]
      },
      {
        "heading": "二、DFS的使用步骤",
        "paragraphs": [
          "```cpp\nvoid dfs(int step){ //step搜索的路径步骤\n    判断边界问题{\n        进行操作（如搜索完，并找到答案）\n    }\n    尝试每一种可以走的路径{\n        check() return ;//剪枝\n        标记该状态已经走到\n        继续下一步搜索 DFS(step + 1)\n        回溯（回到最开始的状态）\n    }\n}\n```"
        ]
      },
      {
        "heading": "三、N皇后问题",
        "paragraphs": [
          "**n皇后问题**：",
          "![img](@img/haaspl26)",
          "**解决代码：**",
          "```cpp\n#include <iostream>\nusing namespace std;\nconst int N = 10;\nbool col[N], row[N], dg[N], udg[N];\nchar g[N][N];\nint n;",
          "void dfs(int x, int y, int s){\n    if (y == n){\n        x ++;\n        y = 0;\n        if (x == n) {\n            if (s == n){\n                for (int i = 0; i < n; i ++) puts(g[i]);\n            }\n            return ;\n        }\n    }\n    dfs(x, y + 1, s);",
          "if (!col[x] && !row[y] && !dg[x + y] && !udg[x - y + n]){\n        col[x] = row[y] = dg[x + y] = udg[x - y + n] = true;\n        g[x][y] = 'Q';\n        dfs(x, y + 1, s + 1);\n        g[x][y] = '.';\n        col[x] = row[y] = dg[x + y] = udg[x - y + n] = false;\n    }\n}",
          "int main(){\n    cin >> n;\n    for (int i = 0; i < n; i ++){\n        for(int j = 0; j < n; j ++){\n            g[i][j] = '.';\n        }\n    }\n    dfs(0, 0, 0);\n    return 0;\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-39",
    "tags": [
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "BFS(广度优先算法)",
    "date": "2024-08-26",
    "cover": "📐",
    "excerpt": "一、BFS是什么 先用百度百科的来讲： BFS（又称广度优先搜索）是最简便的图的搜索算法之一，这一算法也是很多重要的图的算法的原型。Dijkstra单源最短路径算法和Prim最小生成树算法都采用了和广度优先搜索类似的思想。属于一种盲目搜寻法...",
    "sections": [
      {
        "heading": "一、BFS是什么",
        "paragraphs": [
          "先用百度百科的来讲： **BFS（又称广度优先搜索）**是最简便的图的搜索算法之一，这一算法也是很多重要的图的算法的原型。**Dijkstra单源最短路径算法**和**Prim最小生成树算法**都采用了和**广度优先搜索**类似的思想。属于一种**盲目搜寻法**，目的是**系统地展开并检查图中的所有节点，以找寻结果。**换句话说，它并不考虑结果的可能位置，彻底地搜索整张图，直到找到结果为止。",
          "简单来说，**BFS是一种图搜索的算法**，目的是**用于搜索检查每一个可以达到的点,**直到找到结果为止。他和**DFS**的区别：**DFS**是一条路走到黑，如果没用路就返回，而**BFS**是从上往下层次依序遍历，我们一般用**队列**来实现**BFS**的遍历。",
          "**图解：（箭头的遍历方式）1 -> 2 -> 3 -> 4 -> 5 - > 6 -> 7 - > 8 - > 9 -> 10;**",
          "![img](@img/l8tpelnr)"
        ]
      },
      {
        "heading": "二、BFS的使用步骤",
        "paragraphs": [
          "**可以分为四个步骤：初始化**（初始化队列和所求的值） **\\-> 判空取队头（**判断是否为空并取出队头） **\\-> 拓展**（利用队头去扩展） **\\-> 判断入队**（如果符合，将该点入队）。",
          "```cpp\nvoid bfs(){\n    queue<int>q;\n    q.push(初始位置);",
          "//初始化\n    while(q.size()){\n        int t = q.front();\n        q.pop();//取出队头的点，用该点向周围扩散。\n        if(check(j)){       //如果该点可行就将它加入队列中\n            q.psuh(j);      \n            //实施相应的操作 \n        }\n    } \n} \n```"
        ]
      },
      {
        "heading": "三、迷宫问题",
        "paragraphs": [
          "**迷宫问题：**",
          "![](@img/bu1dap0z)",
          "**完整代码:**",
          "```cpp\n#include <iostream>\n#include <cstring>\n#include <queue>\nusing namespace std;\nconst int N = 110;\ntypedef pair<int, int> PII;\nint n, m;\nint g[N][N], d[N][N];\nint dx[4] = {0, -1, 0, 1}, dy[4] = {1, 0, -1, 0};",
          "void bfs(){\n    // 初始化\n    queue<PII> q;\n    q.push({0, 0});\n    memset(d, -1, sizeof(d));\n    d[0][0] = 0;",
          "// 拓展\n    while(q.size()){\n        auto t = q.front();\n        q.pop();\n        int x = t.first, y = t.second;\n        for (int i = 0; i < 4; i ++){\n            int a = x + dx[i], b = y + dy[i];\n            if (a >= 0 && a < n && b >= 0 && b < m && g[a][b] == 0 && d[a][b] == -1){\n                d[a][b] = d[x][y] + 1;\n                // 入队\n                q.push({a, b});\n            }\n        }\n    }\n    cout << d[n - 1][m - 1] << endl;\n}",
          "int main(){\n    cin >> n >> m;\n    for (int i = 0; i < n; i ++){\n        for (int j = 0; j < m; j ++){\n            cin >> g[i][j];\n        }\n    }\n    bfs();\n    return 0;\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-40",
    "tags": [
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "邻接表和邻接矩阵、树的遍历",
    "date": "2024-08-26",
    "cover": "📐",
    "excerpt": "一、邻接表与邻接矩阵 1.1 稠密图与稀疏图 图的储存方式分两种：邻接表和邻接矩阵。 了解邻接矩阵和邻接表之前我们要先学会稠密图、稀疏图。 百度百科来说：稠密图、稀疏图。 稀疏图：有很少条边或弧（边的条数|E|远小于|V|²）的图称为稀疏图...",
    "sections": [
      {
        "heading": "1.1 稠密图与稀疏图",
        "paragraphs": [
          "图的储存方式分两种：**邻接表**和**邻接矩阵**。 了解**邻接矩阵**和**邻接表**之前我们要先学会**稠密图、稀疏图**。",
          "百度百科来说：**稠密图、稀疏图。**",
          "**稀疏图：**有很少条边或弧**（边的条数|E|远小于|V|²**）的图称为**稀疏图（sparse graph）。**",
          "**稠密图：**有很多条边或弧 **(边的条数|E|接近|V|²)** 的图称为**稠密图（dense graph**）。",
          "简单来说：我们假设某个图的**点的个数 为 N,** **边的个数为 M**， 当 **M << N ^ 2** (平方)（当边数远小于点的平方）时称为 **稀疏图**，当 **M ≈ N ^ 2** （当边数约等于点的平方）时称为 **稠密图，** 如果图为**稀疏图**的时候，我们一般用**邻接表**储存，**稠密图**的时候，一般用**邻接矩阵**存储。"
        ]
      },
      {
        "heading": "2.邻接矩阵的存储方式",
        "paragraphs": [
          "**邻接矩阵：**邻接矩阵的储存方式是用一个二维数组`g[a][b]`(a -> b的权值)**来表示图的边的信息**，a, b都是点， `g[a][b]` 表示a到b的距离。",
          "**图解：（图片来源于百度百科）**",
          "![img](@img/zukfwopx)",
          "**代码：**",
          "```cpp\n//运用在最短路或者最小生成树中邻接矩阵的代码方式\nwhile(m --){ //m条边 \n    int a, b, w;\n    cin >> a >> b >> w;\n    g[a][b] = min(g[a][b], w); //取最小的边\n}\n```"
        ]
      },
      {
        "heading": "1.3 邻接表的存储方式",
        "paragraphs": [
          "**邻接表：邻接表**的储存方式是用**单链表**来存储，在单链表中，**头结点**存储的是a, **链表**存储的可能是b, c , d。例如**：a -> b -> c -> d**表示**a能到b、a能到c、a能到d**。",
          "**链表结构**有**ne\\[ \\]数组：**next指针，**e\\[ \\]:** a能到的点， **w\\[ \\]：** a到b的距离。",
          "**图解：（图片来源于百度百科）**",
          "![img](@img/shqg7y8f)",
          "**代码：**",
          "```cpp\n//idx 表示当前节点 \nvoid add(int a, int b, int c){\n    e[idx] = b; \n    w[idx] = c;\n    ne[idx] = h[a];\n    h[a] = idx ++;\n}",
          "while(m --){ //m表示边数 \n    int a, b, c;\n    cin >> a >> b >> c;\n    add(a, b, c);\n} \n```"
        ]
      },
      {
        "heading": "2.1 DFS",
        "paragraphs": [
          "**代码：**",
          "```cpp\nvoid dfs(int u){\n    st[u] = true;//已经遍历到了\n    for(int i = h[u]; i != -1; i = ne[i]){ //遍历链表\n        int j = e[i];\n        if(!st[j]){\n            dfs(j); //递归\n            //进行相应的操作\n        }\n    }\n}\n```",
          "![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)"
        ]
      },
      {
        "heading": "2.2 BFS",
        "paragraphs": [
          "**代码：**",
          "```cpp\nint bfs(){\n    queue<int>q;\n    q.push(1);\n    while(q.size()){\n        int t = q.front();\n        q.pop();\n        for(int i = h[t]; i != -1; i = ne[i]){ //遍历链表\n            int j = e[i];\n            q.push(j); //入队\n        }\n    }\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-41",
    "tags": [
      "图论",
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "图论-五种最短路算法",
    "date": "2024-08-26",
    "cover": "📐",
    "excerpt": "一、最短路是什么？ 最短路径： 从某个点A（位置）到另一个点B(位置)的最短距离，实现方法：点A途中可以经过很多个点C，然后通过不断更新点A到途中点 C 的最短距离，最后实现最短距离到达 点B。 A -&gt; C1 -&gt; C2 -&...",
    "sections": [
      {
        "heading": "一、最短路是什么？",
        "paragraphs": [
          "**最短路径**： 从某个**点A**（位置）到另一个**点B**(位置)的最短距离，实现方法：**点A**途中可以经过很多个**点C**，然后通过不断更新**点A**到途中**点 C** 的最短距离，最后实现**最短距离**到达 **点B。**",
          "**A -> C1 -> C2 -> C3 -> B**",
          "**最短路径的分类：**",
          "**单源最短路：图中的一个点到其余各点的最短路径**",
          "**多源最短路：图中每两个点的最短路径**",
          "**框架图解：（如果看不清的话，放大浏览器再观看）**",
          "![img](@img/fg1lger4)",
          "**图中稠密图用邻接矩阵，稀疏图用邻接表**"
        ]
      },
      {
        "heading": "二、朴素Dijkstra算法",
        "paragraphs": [
          "**Dijkstra算法（迪杰斯拉算法）**：该算法的特点是从起始点开始，采用贪心算法的策略，采用加点的的方式，每次遍历到起始点距离最近且从未被访问过的顶点的邻接节点t，将该点t加入集合S中，直到扩展到终点位置。",
          "**时间复杂度：O（n ^ 2）**",
          "**思想（操作）：**",
          "-   将图上的点分为两个集合：分别是S集合和N集合\n    \n    1.  S：表示访问过的点（用st数组存储）\n        \n    2.  N：表示未访问过的点\n        \n-   将**N集合中的点**按**到S集合**距离最短依次加入到**S集合**中\n    \n-   用刚到**S集合**中的**点t**去更新**集合N**到**起始点**的距离**（这一步也就是松弛操作）**",
          "**图解：**",
          "![img](@img/ht1ytg5a)",
          "**步骤： dist\\[ \\]：每个点到起始点的距离 st\\[ \\]：是否加入到了s集合中**",
          "1.  初始化距离：把每个点都初始化为**0x3f3f3f3f**（无穷大）\n    \n2.  进行n层循环：遍历dist数组，找到一个**不在S集合**中并**距离S**集合最短的**点t**，每一层循环都将**找到的点t**将它放入**S集合中（st\\[t\\] = true）**\n    \n3.  用找到的**点t**去更新**N集合**到**起始点**的距离（松弛操作）",
          "**代码 + 注释：**",
          "```cpp\nconst int N = 1e5 + 10;//多少个点\nint dist[N];    //每个点到起始点的距离\nbool st[N];    //S集合\nvoid dijkstra(){\n    memset(dist, 0x3f3f3f3f, sizeof dist);//初始化距离\n    dist[1] = 0;\n    for(int i = 1; i <= n; i ++){    //进行n次循环\n        int t = -1;                  //设找到的点初始化为1\n        for(int j = 1; j <= n; j ++){\n            if(!st[j] && (t == -1 || dist[j] < dist[t])) \n                //如果该点j没在S集合中并且没更新或者有距离S集合更小的点\n                t = j; //找到该点\n        } \n        st[t] = true;加入集合S中\n        //松弛操作，用该点更新到s的距离\n        for(int j = 1; j <= n; j ++){\n            dist[j] = min(dist[j], dist[t] + g[t][j]);\n        }\n    }\n    if(dist[n] == 0x3f3f3f3f) puts(\"impossible\");//如果为无穷大说明到不了n点\n    else printf(\"%d\", dist[n]);",
          "} \n```"
        ]
      },
      {
        "heading": "三、堆优化版Dijkstra算法",
        "paragraphs": [
          "**堆优化版Dijkstra算法**：**堆优化版Dijkstra算法**是对**朴素Dijkstra算法**遍历所有点比较找出距离最近的点这一步骤，使用**小根堆（优先队列）**对这段代码进行优化：",
          "```cpp\nfor(int i = 1; i <= n; i ++){    //进行n次循环\n        int t = -1;                  //设找到的点初始化为1\n        for(int j = 1; j <= n; j ++){\n            if(!st[j] && (t == -1 || dist[j] < dist[t])) \n                //如果该点j没在S集合中并且没更新或者有距离S集合更小的点\n                t = j; //找到该点\n        } \n```",
          "**时间复杂度：O（m \\* logn）**",
          "**思想：** **typedef pair<int, int>PII;**",
          "**用小根堆priority\\_queue<PII, vector, greater\\>heap;存储距离和点，堆自动排序，可以排序取距离S集合小的点，然后每次取不在集合S中距离最段的点，再进行松弛操作，最后将松弛操作的点插入小根堆中**",
          "**步骤：**",
          "1.  初始化距离：把每个点都**初始化**为0x3f3f3f3f（无穷大），并将**1号点**放在堆中\n2.  取出堆顶的点，用该**点t**进行**拓展**，采用**邻接表**的数据结构，遍历该**点t**能到的所有节点\n3.  进行松弛操作，然后把**松弛的点**和**距离**加入堆中。",
          "**代码 + 注释：**",
          "```cpp\ntypedef pair<int, int>PII; //pair<int, int>用来存两个值\nconst int N = 1e5 + 10;\nint dist[N];\nbool st[N];",
          "int dijkstra(){\n    memeset(dist, 0x3f3f3f3f, sizeof dist);//初始化距离\n    dist[1] = 0;\n    priority_queue<PII, vector<PII>, greater<int>>heap;//定义小根堆\n    heap.push({0, 1}); //一定要距离在第一位，因为小根堆是根据第一个数据来排序",
          "while(heap.size()){\n        PII t = heap.top();        //取堆顶距离最小的元素\n        heap.pop();\n        int distance = t.first, ver = t.second;//取出距离和点\n        if(st[ver]) continue;//如果该点以及加入了集合S中，就continue\n        st[ver] = true;      //否则加入该点",
          "for(int i = h[ver]; i != -1; i = ne[i]){    //遍历该点能到的点的位置\n            int j = e[i];\n            if(dist[j] > distance + w[i]){    //进行松弛操作\n                dist[j] = distance + w[i];    \n                heap.push({dist[j], j});        //入堆\n            }\n        }\n    }\n    if(dist[n] == 0x3f3f3f3f) return -1;\n    else return dist[n];\n}\n```"
        ]
      },
      {
        "heading": "四、Bellman_Ford算法",
        "paragraphs": [
          "**Bellman\\_Ford算法(贝尔曼-福特算法)：**该算法比**Dijkstra算法**更具有普遍性，**Dijkstra算法**采用的是**贪心思想**，而**Bellman\\_Ford**采用的是**动态规划**，因为它对边没有要求，可以处理负权边与负权回路，也可以求边数限制的最短路，缺点是它的**时间复杂度比较高，**不能判断**负环**",
          "**时间复杂度：O（n \\* m）**",
          "**思想：**用**结构体**来存储图**，**对所有的**边（重点）**进行**n - 1轮松弛操作**，就是第一轮对所有边进行松弛，得到的是源点最多经过一条边到达其他顶点的最短距离，第二轮对所有的边进行松弛，得到的是最多经过两条边到其他顶点的最短距离，以此类推，最后达到**n\\*\\***点\\*\\*",
          "**图解：**",
          "![img](@img/bin8ju7t)",
          "**步骤：**",
          "1.  循环n - 1次，每次循环更新每条边的最短距离\n2.  备份一份上次迭代dist距离的数据，防止串联\n3.  用以后的dist\\[j\\]进行拓展，松弛操作",
          "**代码 + 注释：**",
          "```cpp\nconst int N = 1e5 + 10;\nint dist[N];//距离\nint back[N];//备份的数据",
          "struct Edge{\n    int a, b, w;\n}edge[N];",
          "int bellman_ford(){\n    memset(dist, 0x3f3f3f3f, sizeof dist); //初始化距离\n    dist[0] = 1;\n    for(int  = 0; i <= k; i ++){        //可以求只经过k条边（限制边数）\n        memcpy(back, dist, sizeof dist);    //备份防止串联\n        for(int j = 1; j <= n; j ++){        //遍历每个点\n            int a = edge[i].a, b = edge[i].b, w = edge[i].w;    //取值\n            dist[b] = min(dist[b], back[a] + w);    //松弛操作\n        }\n    }\n    if(dist[n] > 0x3f3f3f3f / 2) return -1;    //因为存在负权边，所以0x3f3f3f3f要除2\n    return dist[n];\n} \n```"
        ]
      },
      {
        "heading": "五、spfa算法",
        "paragraphs": [
          "**SPFA算法（全称Shortest Path Faster Algorithm）：是Bellman\\_frod的队优化形式，通常用来求含负权边的的单源最短路问题，以及判断负权环，如果存在负权环就不能用SPFA算法计算最短路**",
          "**SPFA算法与Bellman\\_frod的区别**：**SPFA**是**Bellman\\_ford**的**队优化版**，但B**ellman\\_Ford**可以用来**求负环**的最短路，是因为其**循环次数**是有限制的，因此不会发生死循环，而**SPFA算法**不可以求带有负环的最短路，由于用了**队列**存储，只要发生了更新就会不断的入队，因此有了**负权回路**就不能用SPFA否则会死循环，但是**SPFA**可以利用这点来**判断图中是否存在负环**，如果某个点（非终点）的**经过边数**达到了n就说明**存在负环**。",
          "**时间复杂度：由于SPFA是Bellman\\_ford优化而来，所以SPFA的最坏的情况是O(n \\* m)，一般情况下是O（n）**",
          "**对Bellman\\_ford的代码优化：**",
          "```cpp\nfor(int j = 1; j <= n; j ++){        //遍历每个点\n    int a = edge[i].a, b = edge[i].b, w = edge[i].w;    //取值\n    dist[b] = min(dist[b], back[a] + w);    //松弛操作\n}\n```",
          "**思路：**采用的是类似**BFS无权环**的思路，设立一个**队列**来保存待优化的结点，优化时每次取**队头结点t**，然后遍历**队头能经过的边到达的点v**，**t点**对所能**经过的边的点v**进行**松弛操作**，如果能进行**松弛操作**，并且**v点不在当前队列中**，就将v点**入队**，这样不断进行松弛操作，直到**队列为空**为止",
          "步骤：",
          "1.  初始化dist\\[ \\]数组，建立一个队列，将起始点入队\n2.  取出队头进行扩展，并进行松弛操作",
          "**代码 + 注释：**",
          "```cpp\nconst int N = 1e5 + 10;        //多少个点\nint e[N], ne[N], w[N], idx, h[N];\nvoid add(int a, int b, int c){    //邻接表的存储方式\n    e[idx] = b;\n    w[idx] = c;\n    ne[idx] = h[a];\n    h[a] = idx ++;\n}",
          "int spfa(){\n    memset(dist, 0x3f3f3f3f, sizeof dist);    //初始化距离\n    dist[0] = 1;\n    queue<int> q;        //定义队列\n    q.push(1);\n    st[1] = true;",
          "while(q.size()){\n        int t = q.front();        //取出队头\n        q.pop();\n        st[t] = false;",
          "for(int i = h[t]; i != -1; i = ne[i]){    //遍历t能到的点\n            int j = e[i];\n            if(dist[j] > dist[t] + w[i]){        //松弛操作\n                dist[j] = dist[t] + w[i];\n                if(!st[j]){\n                    q.push(j);\n                    st[j] = true;\n                }\n            }\n        }\n    }\n    return dist[n];\n}\n```",
          "**SPFA算法判读负环的代码 + 注释：**",
          "```cpp\nconst int N = 1e5 + 10;\nint dist[N];\nint cnt[N];记录当前点t到源点最短路的边数，\nbool spfa(){\n    // 这里不需要初始化dist数组为 正无穷/初始化的原因是， 如果存在负环， 那么dist不管初始化为多少， 都会被更新\n    queue<int>q;",
          "//不仅仅是第一个点了， 因为第一个点可能到不了有负环的点， 因此把所有点都加入队列\n    for(int i = 1;i <= n; i ++){\n        q.push(i);\n        st[i] = true;\n    }",
          "while(q.size()){\n        int t = q.front();\n        q.pop();\n        st[t] = false;\n        for(int i = h[t]; i != -1; i = ne[i]){\n            int j = e[i];\n            if(dist[j] > dist[t] + w[i]){\n                dist[j] = dist[t] + w[i];\n                cnt[j] = cnt[t] + 1;//如果能进行松弛操作就在当前点的cnt+ 1\n                if(cnt[j] >= n){\n                    return true;\n                }\n                if(!st[j]){\n                    q.push(j);\n                    st[j] = true;\n                }\n            }\n        }\n    }\n    return false;\n}\n```"
        ]
      },
      {
        "heading": "六、Floyd算法",
        "paragraphs": [
          "**Floyd算法（弗洛伊德算法又称插点法）：采用动态规划的思想，来解决给多源最短路的问题，可以求图中的任意一点x到任意一点y的距离**",
          "**时间复杂度：O(n ^ 3)** **三重循环**",
          "**算法思路：**从图的**带权邻接矩阵**开始，进行n次**迭代更新**，每次更新**每两个点**之间的最短距离，状态方程：**f\\[i\\]\\[j\\] = min(f\\[i\\]\\[j\\], f\\[i\\]\\[k\\] + f\\[k\\]\\[j\\]);**",
          "**步骤：**",
          "1.  **初始化**：从任意一条**单边路径**开始。所有**两点之间**的距离是边的权，如果两点之间没有边相连，则权为**无穷大**。\n2.  对于每一对**顶点** i 和 j, 看看是否存在一个**顶点 k** 使得从 i 到 k 再到 j 比已知的路径更短。如果是更新它。",
          "**代码 + 注释：**",
          "```cpp\nvoid Folyd(){\n    for (int i = 1; i <= n; i ++ ){    //初始化\n       for(int j = 1; j <= n; j ++){\n            if(i == j) d[i][j] = 0;\n            else d[i][j] = INF;\n        }\n    }\n    //动态规划\n    for(int k = 1; k <= n; k ++)\n        for (int i = 1; i <= n; i ++ )\n            for (int j = 1; j <= n; j ++ )\n                d[i][j] = min(d[i][j], d[i][k] + d[k][j]);\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-42",
    "tags": [
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "最小生成树 (Prim算法和Kruskal算法)",
    "date": "2024-08-26",
    "cover": "📐",
    "excerpt": "一、最小生成树什么？ 1.1 定义 最小生成树： 一个有n个结点的连通图的生成树是原图的最小连通图，且包含原图的所有n个结点，并且保持图的连通的最少的边。 最小生成树可以用：Prim算法和kruskal算法求出 1.2 应用 铺设电缆： 以...",
    "sections": [
      {
        "heading": "1.1 定义",
        "paragraphs": [
          "**最小生成树：** 一个有n个结点的**连通图**的生成树是原图的最小连通图，且包含原图的所有n个结点，并且保持图的连通的最少的边。",
          "最小生成树可以用：**Prim算法**和**kruskal算法**求出"
        ]
      },
      {
        "heading": "1.2 应用",
        "paragraphs": [
          "1.  **铺设电缆：** 以尽可能低的总价去铺设城市之间的电缆（假设每两个城市可以连通）\n    \n2.  **旅行家：** 某人自驾游想花费最短的路程去旅行到自己所想去的城市（城市有n个 **n > 2**）\n    \n3.  **连接道路：** 与铺设电缆类似，以最小连通去连接每一个城市"
        ]
      },
      {
        "heading": "1.3 性质",
        "paragraphs": [
          "假设设G=(V，E）是一个连通网络，U是顶点集V的一个**非空真子集**。若(u，v）是G中一条“一个端点在U中（例如：u∈U），另一个端点不在U中的边（例如：v∈V-U），且（u，v）具有**最小权值**，则一定存在G的一棵**最小生成树**包括此边（u，v） **转载：** [百度百科](https://baike.baidu.com/item/%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91/5223845#reference-%5B1%5D-288214-wrap)"
        ]
      },
      {
        "heading": "二、Prim算法",
        "paragraphs": [
          "**思想：** 采用了**贪心**的思想，与[dijkstra算法](https://blog.csdn.net/qq_46056407/article/details/123788270?spm=1001.2014.3001.5501)有高度的相似性，对于包含 N 个顶点的连通网，每次从连通网中找出一个离**集合S**权值最小的点，通过不断加点到集合S中并加上其**权值**，然后更新点到集合S的距离来构建最小生成树， **别名又称加点法**  \n**时间复杂度：** O（n ^ 2）  \n**图解：dist\\[N\\]: 表示点到集合S的最短距离， st\\[N\\]:表示集合S（与Dijkstra类似）**",
          "-   将图上的点分为两个集合：分别是**S集合**和**N集合**\n-   S集合表示访问过的点（用st数组存储）\n-   N：表示未访问过的点",
          "![Prim图解](@img/encvb4qx)",
          "**步骤：**",
          "-   **与dijkstra算法不同的是dijkstra算法是更新集合N的点到起始点的距离，而prim算法是更新集合N的点到集合S的距离**",
          "1.  **初始化距离：** 把每个点到集合S的距离都初始化为正无穷（0x3f3f3f3f）\n    \n2.  **加点：** 进行n次循环，每循环一次就将**集合N中**离集合S最近的**点t**加入到集合S中 **(st\\[t\\] = true)**\n    \n3.  **松弛操作：** 用找到的点t去更新集合N到集合S的距离\n    \n    **代码 + 注释：**",
          "```cpp\nconst int N = 1e5 + 10;\nint dist[N]; //点到集合S的距离 \nint g[N][N]; //邻接矩阵 \nbool st[N]; //是否加入到集合S中 \nint prim(){\n    memset(dist,0x3f3f3f3f ,sizeof dist);\n    int res = 0;\n    for(int i = 0; i < n; i ++){ //进行n次循环，每次循环加一个点 \n        int t = -1;\n        for(int j = 1; j <= n; j ++){\n            if(!st[j] && (t == -1 || dist[t] > dist[j])) t = j;  //找点 \n        }\n        if(i && dist[t] == 0x3f3f3f3f) return 0x3f3f3f3f;//如果找到的点距离为无穷大，说明没有最小生成树 \n        if(i) res += dist[t];   //加上权值 \n        st[t] = true;           //加点 \n        for(int j = 1; j <= n; j ++){        //松弛操作 \n            dist[j] = min(dist[j], g[t][j]);\n        }\n    }\n    return res;\n}\n```"
        ]
      },
      {
        "heading": "三、kruskal算法",
        "paragraphs": [
          "**思想：kruskal算法(克鲁斯卡尔算法）** 与**Prim算法**一样也是基于**贪心**思想而来的。但与Prim算法加点不同的是kruskal算法是通过**加边**来实现最小生成树的，对每条边的权值进行**排序**，然后根据权值由小变大依次来判断边的两个顶点是否属于同一个连通块，并用[并查集](https://baike.baidu.com/item/%E5%B9%B6%E6%9F%A5%E9%9B%86)的方法把边加入到同一个连通块中 **时间复杂度：**O（mlog2m） **m表示边的数量 ==注意：结构体存储==** 步骤：\\*\\*",
          "1.  **排序：** 对所有的边进行由小到大**排序**，然后依次进行**遍历**\n2.  **合并加边：** 判断该边的两个顶点是否为**同一个连通块**，若是则**合并**两个顶点，并加入**权值**",
          "**代码 + 注释：**",
          "```cpp\nconst int N = 2e5 + 10, INF = 0x3f3f3f3f;//N表示多少个点\nint n, m;\nint bin[N]; //祖宗结点",
          "struct Edge{        //结构体存储\n    int a, b, w;    //表示a -> b 的权值为w\n    bool operator < (const Edge &W) const{\n        w < W.w;\n    }\n}edges[N];",
          "int find(int x){\n    if(bin[x] != x) bin[x] = find(bin[x]);\n    return bin[x];\n}",
          "int kruskal(){\n    sort(edges, edges + m); //排序\n    for(int i = 1; i <= n; i ++) bin[i] = i;\n    int res = 0, cnt = 0;",
          "for(int i = 0; i < n; i ++){\n        int a = edges[i].a, b = edges[i].b, w = edges[i].w;\n        a = find(a), b = find(b);\n        if(a != b){ //合并\n            bin[a] = b;\n            cnt ++; //有多少条边\n            res += w; //加权值\n        }\n    }\n    if(cnt < n -1) return INF;//如果边小于n - 1说明有点没有连接 \n    else return res;\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-43",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "UGUI基础",
    "date": "2024-08-28",
    "cover": "🎮",
    "excerpt": "一、UGUI概述 UGUI(Unity GUI)是Unity引擎中的用户界面系统，用于创建游戏和应用程序中的用户界面，它基于画布(Canvas)系统，通过组件和GameObject来排列、定位和样式化UI元素。 Unity社区的UGUI学习...",
    "sections": [
      {
        "heading": "一、UGUI概述",
        "paragraphs": [
          "UGUI(Unity GUI)是Unity引擎中的用户界面系统，用于创建游戏和应用程序中的用户界面，它基于**画布(Canvas)系统**，通过组件和GameObject来排列、定位和样式化UI元素。",
          "Unity社区的UGUI学习链接：[https://developer.unity.cn/projects/637c68a3edbc2a001ba22eee](https://developer.unity.cn/projects/637c68a3edbc2a001ba22eee)",
          "UGUI的主要特点包括：",
          "-   **基于组件:**使用各种UI组件（如按钮、文本、图像等）来构建界面。\n-   **事件系统:**处理用户输入事件，如点击、拖动等。\n-   **布局系统：**支持自动布局和自适应布局，如水平布局、垂直布局和网格布局。\n-   **渲染优化：**通过批量渲染和减少重绘次数来提高性能。"
        ]
      },
      {
        "heading": "2.1.1 网格构建",
        "paragraphs": [
          "-   UGUI系统是基于**3D网格**来构建UI的，当Unity创建一个UI元素时，UGUI会首先为这个该元素构建方形网格。\n    \n-   每个UI元素都可以看作是一个**3D模型**，其网格上绑定了材质球，材质球存放了要显示的**图片或纹理**。"
        ]
      },
      {
        "heading": "2.1.2 材质和网格合并",
        "paragraphs": [
          "-   为了优化渲染性能，UGUI会将具有相同图片和着色器的材质球合并成一个，并**将分散的网格合并成几个大型网格**进行渲染。\n-   合并规则通常是在**同一个Canvas中，相同层级、具有相同材质球参数的元素**会被合并，相同层级是指UI布局中覆盖的层级。"
        ]
      },
      {
        "heading": "2.2.1 Canvas组件",
        "paragraphs": [
          "-   **功能：**容纳所有UI元素的区域，是一直带有画布组件的游戏对象。\n-   **渲染模式：**\n    -   **Screen Space-Overlay:** 将UI元素放置于场景之上渲染的屏幕上，常用在纯UI系统的区域内，其中组件中的**Sort Order参数值越大，越靠前渲染**。\n    -   **Screen Space-Camera:**UI元素由此摄像机渲染，摄像机设置会影响UI的外观。是实际项目中制作UI系统最常见的模式，不过UGUI系统底层针对排序有一些规定，如**对元素的Z轴不为0的元素，会单独提取出来渲染，不参与合并。**\n    -   **World Space:**用于UI物体放在3D世界中，如游戏中的3D界面、物体标记、和交互面板等。"
        ]
      },
      {
        "heading": "2.2.2 Canvas Scaler组件",
        "paragraphs": [
          "-   **功能：**用于在不同分辨率下保持UI控件大小的自适应。\n    \n-   **适配模式（UI Scale Mode）：**\n    \n    -   **Constant Pixel Size：**无论屏幕大小如何，UI始终保持相同像素大小。\n    -   **Scale With Screen Size：**根据屏幕尺寸进行缩放，随之屏幕尺寸放大缩小。\n    -   **Constant Physical Size：**无论屏幕大小和分辨率如何，UI元素始终保持物理大小。\n    \n    在实际手游项目中，设备的屏幕分辨率变化比较大，通常以Scale With Screen Size来自动适配比例。",
          "![20240827174656](@img/f516jyfh)",
          "-   **Scale With Screen Size常用属性**\n    -   **Reference Resolution:**设置参考分辨率，用于计算缩放比例。\n    -   **Screen Match Mode:**设置屏幕匹配模式，有Match Width Or Height(宽度或高度的匹配比例)，Expand(扩展)、Shrink(裁剪)\n    -   **Match:**是否以宽度、高度或者两者的平均值作为参考。\n    -   Reference Pixels Per Unit: Sprirt的每个像素将覆盖UI的一个单位。"
        ]
      },
      {
        "heading": "2.2.3 Graphic Raycaster组件",
        "paragraphs": [
          "-   **功能：**用于检测UI输入事件的射线发射器，主要负责通过射线检测玩家和UI元素的交互。"
        ]
      },
      {
        "heading": "2.2.4 EventTrigger组件",
        "paragraphs": [
          "-   **功能：**点击相应作用，配合前面的Graphic Raycaster进行响应。"
        ]
      },
      {
        "heading": "2.2.5 Image和RawImage的区别",
        "paragraphs": [
          "-   **支持纹理类型：**RawImage支持任何类型的Texture，Image主要支持Sprite类型的Texture。RawImage一般展示单张图片，不能采用图集获取小块图片，而Image则使用图集的性能会更高一点。\n-   **功能负责性：**RawImage功能相对单一，一般只用来显示动态图像、视频帧、相机渲染等，Image功能丰富，提供了多种Image Type(如Simple、Sliced、Tiled、Filled)，可以实现图片的填充、拉伸、动画多种。"
        ]
      },
      {
        "heading": "2.2.6 Mask组件",
        "paragraphs": [
          "-   **工作原理：**\n    1.  **基于模板测试**：Mask利用GPU的**模板缓冲区域**，它会将自身所在的GameObject的Image组件的轮廓写入模板缓冲区（重新一个材质球）。\n    2.  **子对象继承模板设置：**所有的子UI元素在渲染时，会检查模板缓冲区域，如果子物体在模板值检测的区域才会被绘制，区域外的则被丢弃。\n    3.  **依赖Imag组件：**Mask组件必须和Image组件绑定在同一个GameObject上才能工作，Image的alpha值决定了遮罩的形状。(alpha > 0才能有遮罩效果)\n-   **属性：**\n    -   **Show Mask Graphic:** 是否显示Mask组件所在的GameObject上的Image图像上。\n-   **优点：** 支持任意形状的图片来作为遮罩\n-   **缺点：**\n    -   **性能开销大：**每个使用Mask的Canvas都会导致一次Canvas的重新构建，并且会**增加额外的绘制调用**。如果场景有大量动态变化便会对性能产生明显的影响。"
        ]
      },
      {
        "heading": "2.2.7 RectMask2D组件",
        "paragraphs": [
          "RectMask2D是专门为**矩形遮罩优化**而生的组件。",
          "-   **工作原理：**\n    1.  **基于剪裁矩形：**不使用模板测试，而是直接使用自身的矩阵变换区域。\n    2.  **不依赖Image组件：**RectMask2D不需要Image组件，其遮罩区域完全由GameObject的RectTransform来决定。\n-   **优点**\n    1.  **性能极高：**由于使用的是硬件裁剪，它的性能开销远低于Mask，它**不会导致Canvas的重新构建**。\n    2.  **支持任意层级子物体：**只要子物体是遮罩矩阵区域的任意后代（ugui是按层级依次渲染的），都会被正确遮罩。\n-   **缺点：** 只能支持矩阵遮罩。"
        ]
      },
      {
        "heading": "2.2.8 ScollView组件",
        "paragraphs": [
          "-   **概念：**一个复合组件，其核心功能是在一个固定的可视区域内，浏览一个更大的内容区域，当内容超过视口大小时，它会自动提供滚动条，需要用户来拖动显示。\n    \n    1.  **ScrollView(GameObject)：** 根节点，包含主要组件。\n    2.  **Viewport(GameObject)：**定义可视区域的遮罩。\n    3.  **Content(GameObject)：**存放需要滚动内容的容器。\n-   **Scroll Rect (滚动矩形)：**Scroll View 的大脑\\*\\*，控制着所有的滚动逻辑\n    \n    -   **主要属性：**\n        1.  **Content (内容)**：**拖拽引用**。这里必须引用到下面的 `Content`子对象。它告诉 `ScrollRect`哪个部分是需要滚动的。\n        2.  **Viewport (视口)**：**拖拽引用**。这里必须引用到下面的 `Viewport`子对象。它定义了内容的可视区域。如果留空，默认使用自身的 `RectTransform`作为视口。\n        3.  **Horizontal / Vertical (水平/垂直滚动)**：复选框，决定允许朝哪个方向滚动。\n        4.  **Movement Type (移动类型)**：滚动到边界时的行为。\n            -   `Unrestricted`：无限制，内容可以被完全拖出视口。\n            -   `Elastic`：**弹性（最常用）**。当滚动到边界时，会有一种弹回的效果。\n            -   `Clamped`：硬限制，滚动到边界时立即停止，无弹性效果。\n        5.  **Inertia (惯性)**：是否开启惯性效果。开启后，用户快速拖动后松开，内容会继续滚动一段距离并减速停止。\n        6.  **Scroll Sensitivity (滚动灵敏度)**：鼠标滚轮或触控板滚动的灵敏度。\n-   **Canvas Renderer：**所有 UI 元素都必须有的渲染器。\n    \n-   **Viewport (视口)：**这个 GameObject 的核心作用是**遮罩**。\n    \n-   **Content (内容)：**放置所有可滚动内容的地方，比如一列按钮、一堆图片、文本等。\n    \n    1.  **Content Size Fitter (可选但重要)：**可以**根据子物体的布局自动调整 `Content`矩形的大小**。**例如**：在一个垂直滚动的列表中，可以将 `Content`的 `Vertical Fit`设置为 `Preferred Size`。这样 `Content`的高度就会自动变为所有子物体加上间距后的总高度，从而确保滚动范围是正确的。\n    2.  **布局组件 (Layout Group)**通常你会为 `Content`添加一个 **Vertical Layout Group**或 **Horizontal Layout Group**或 **Grid Layout Group**。这些组件会自动排列其子物体，与 `Content Size Fitter`配合使用。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-44",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "UI 优化",
    "date": "2024-08-28",
    "cover": "🎮",
    "excerpt": "官方解释 Statistics 窗口官方解释 UI合批规则:https://blog.csdn.net/sinat_25415095/article/details/112388638 Unity四种合批技术详解：https://blog....",
    "sections": [
      {
        "heading": "官方解释",
        "paragraphs": [
          "[Statistics 窗口官方解释](https://docs.unity3d.com/cn/2020.1/Manual/RenderingStatistics.html)",
          "UI合批规则:[https://blog.csdn.net/sinat\\_25415095/article/details/112388638](https://blog.csdn.net/sinat_25415095/article/details/112388638)",
          "Unity四种合批技术详解：[https://blog.csdn.net/ww1351646544/article/details/139678759](https://blog.csdn.net/ww1351646544/article/details/139678759)"
        ]
      },
      {
        "heading": "一、UI组成",
        "paragraphs": [
          "-   **UI组成：**UGUI中的每个组件都是由**3D网格，材质球，贴图组成**（可以将其看成扁的3D物体），每创建一个组件，就会**构建一个网格**（从Canvas的CanvasRender组成），然后**将材质球与这个网格绑定**，所有操作都在Canvas中完成，如果需要在Canvas创建n个组件，那么我们就要准备n个材质球，准备n张图片，调用n个drawCall，显然不现实，所有我们需要进行合批的操作。"
        ]
      },
      {
        "heading": "2.1 定义",
        "paragraphs": [
          "合批也叫**Batch**，Unity为了减少渲染调用次数，提高性能，会将相同渲染特性的UI元素合并成一个大网格进行渲染（DrawCall）。而将UI元素的网格合并就叫UI合批。"
        ]
      },
      {
        "heading": "2.2 合批规则",
        "paragraphs": [
          "UI合批的基本规则是两个控件使用的材质球(Shader)和贴图要完全相同，UGUI中Canvas是可以嵌套子Canvas，但是合批是以**Canvas(不包含子Canvas)**为单位的(子Canavs则会是另一个批次)。",
          "**合批步骤：**",
          "1.  **找Canvas集合**：将所有Canvas找出来，然后剔除不必渲染的Canvas(**透明度为0，长宽为0，在RectMask2D下且在RectMask2D的区域外**)\n2.  **计算UI深度值Depth:**\n    1.  从Hierarchy中从上往下的顺序依次遍历Canvas下所有UI元素。\n    2.  如果当前UI不渲染，Depth = -1\n    3.  如果当前UI要渲染，但当前UI下没有其他UI元素与其相交，则Depth = 0\n    4.  如果当前UI要渲染，当前UI下由其他UI元素（LowerUI）与其相交，如果当前UI和LowerUI可以合批（材质和贴图完全相同），则当前UI.Depth = LowerUI.Depth, 如果不能合批的话，当前UI.Depth = LowerUI.Depth + 1;\n    5.  如果当前UI要渲染，下面有n个元素与其相交，按步骤算出n个Depth,然后取n个Depth最大值，即当前UI.Depth = max (Depth1, Depth2, Depth3)",
          "**UI下面：**只Hierechy窗口UI下的元素， **相交**：两个UI元素的网格有相交（非Rect有相交）",
          "3.  各个UI的Depth计算完毕后，依次按照Depth、material ID、texture ID、RendererOrder（即UI层级队列顺序，即Hierarchy面板上的顺序）排序（条件的优先级依次递减，且均为从小到大排序）。然后剔除Depth = -1的UI元素，得到Batch前的UI 元素队列，这个队列被称之为**VisiableList**。\n4.  判断**VisableList**中相邻的元素是否能够合批（相同材质和贴图，不需要考虑Depth是否相同），然后一个批次一个批次的合并网格，提交给GPU进行渲染。"
        ]
      },
      {
        "heading": "2.3 UI重构",
        "paragraphs": [
          "合批是将同一个Canvas下多个UI的网格合并在一起，如果其中任何一个元素的材质，网格顶点，位置（Transform）甚至颜色或者在该Canvas下动态创建或删除UI元素都会导致该Canvas重新计算合批（仅一个Canvas，子Canvas或者父Canvas不会重新计算），重新生成网格，这个重新计算生成网格的过程被称为UI重构(Rebuild)。",
          "**具体触发重构可以参考UGUI源码**。"
        ]
      },
      {
        "heading": "三、优化方案",
        "paragraphs": [
          "UI优化是提升游戏或者应用性能的重要方案，UGUI的优化集中在减少DrawCall、优化内存使用、提升渲染效率等，常用的UGUI方案有UI动静分离、拆分UI、预加载UI、图集拼接优化、网格重构优化等。",
          "-   **UI动静分离：**又称为动静合批，“动”指的是元素移动、放大、缩小的UI重构概率比较高的UI元素，而“静”表示界面上不会移动、旋转、缩放等UI重构基本上没有的UI元素，通过设置静态Canvas和动态Canvas，可以大幅度减少Draw Call的数量。\n-   **拆分UI**：当界面元素过多时，在实例化和初始化时，消耗的CPU会比较大，所有可以将界面需要二次显示的内容进行拆分，使打开界面的时候可以加快。\n-   **预加载UI:**UI实例化到场景的过程：网格合并，组件初始化，渲染初始化，图片加载，界面逻辑调用等，需要消耗大量CPU，可以通过预加载将资源加载到内存、UI实例化和UI初始化的CPU消耗放到**Loading等待时间线上**，如登录过程，场景切换的时间等都可以提前加载资源。\n-   **打包图集：**又称纹理图集打包或精灵图集打包，是一种将多个小纹理合并成一个大纹理的优化技术，UI元素用同一个纹理就可以减少批次的调用次数。\n-   **Scroll View优化:**Scroll组件需要频繁移动，导致每帧都要重构，如果界面上有大量元素，则非常消耗性能，所有可以通过循环利用优化，只实例化需要显示的实例数量，数据达到共享，达到减少CPU浪费。\n-   **对象池技术：**在频繁创建和销毁UI对象使，使用对象池来重复利用已创建的UI对象，减少内存分配和垃圾回收开销"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-45",
    "tags": [
      "基础算法",
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "欧拉函数求质数",
    "date": "2024-09-03",
    "cover": "📐",
    "excerpt": "欧拉函数求质数 #include&lt;iostream&gt; using namespace std; typedef long long ll; const int N = 1e6 + 10; int euler[N], primes...",
    "sections": [
      {
        "heading": "欧拉函数求质数",
        "paragraphs": [
          "```cpp\n#include<iostream>",
          "using namespace std;\ntypedef long long ll;\nconst int N = 1e6 + 10;\nint euler[N], primes[N], cnt;\nbool st[N];\nvoid get_eulers(int n){\n    euler[1] = 1;\n    for(int i = 2; i <= n; i ++){\n        if(!st[i]){\n            primes[cnt ++] = i;\n            euler[i] = i - 1;\n        }\n        for(int j = 0; primes[j] <= n / i; j ++){\n            int t = primes[j] * i;\n            st[t] = true;\n            if(i % primes[j] == 0){\n                euler[t] = primes[j] * euler[i];\n                break;\n            }\n            euler[t] = (primes[j] - 1) * euler[i];\n        }\n    }\n} \nint main(){\n    int n;\n    cin >> n;\n    get_eulers(n);\n    ll res = 0;\n    for(int i = 1; i <= n; i ++) res += euler[i];\n    cout << res << endl;\n    return 0;\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-46",
    "tags": [
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "二叉搜索树 (Binary Search Tree)",
    "date": "2025-10-29",
    "cover": "📐",
    "excerpt": "一、什么是二叉搜索树？ 二叉搜索树，也称为二叉排序树或二叉查找树，是一种特殊的二叉树。它或者是一棵空树，或者是具有下列性质的二叉树： 左子树上所有节点的值均小于它的根节点的值。 右子树上所有节点的值均大于它的根节点的值。 左、右子树也分别为...",
    "sections": [
      {
        "heading": "一、什么是二叉搜索树？",
        "paragraphs": [
          "**二叉搜索树**，也称为二叉排序树或二叉查找树，是一种特殊的二叉树。它或者是一棵空树，或者是具有下列性质的二叉树：",
          "1.  **左子树**上所有节点的值均**小于**它的根节点的值。\n2.  **右子树**上所有节点的值均**大于**它的根节点的值。\n3.  **左、右子树也分别为二叉搜索树**。",
          "这个定义是递归的，它确保了整个树具有一个关键的属性：**中序遍历二叉搜索树，可以得到一个升序排列的有序序列**。"
        ]
      },
      {
        "heading": "二、 核心性质与优点",
        "paragraphs": [
          "-   **有序性**：结构本身隐含了数据的顺序，使得查找、插入、删除等操作可以基于比较快速定位。\n-   **高效性**：对于一棵左右子树相对\"平衡\"的二叉搜索树，搜索、插入、删除等操作的时间复杂度平均为 **O(log n)**，其中 `n`是树中节点的数量。这是因为每次操作都能排除大约一半的搜索空间。\n-   **动态性**：它支持高效地动态插入和删除节点，而无需像静态数组那样需要移动大量元素"
        ]
      },
      {
        "heading": "3.1  树节点定义(c++为例)",
        "paragraphs": [
          "```cpp\nstruct TreeNode {\n    int value;\n    TreeNode* left;\n    TreeNode* right;",
          "TreeNode(int x) : value(x), left(nullptr), right(nullptr) {}\n};\n```"
        ]
      },
      {
        "heading": "3.2 插入",
        "paragraphs": [
          "**目标：**将一个新值插入树中，并保持二叉搜索树的性质。",
          "**步骤：**",
          "1.  树为空，则创建一个新节点作为根节点。\n2.  如果新值**小于**当前节点的值，递归地插入到**左子树**。\n3.  如果新值**大于**当前节点的值，递归地插入到**右子树**。\n4.  **关键**：如果新值等于当前节点的值，根据具体实现决定（通常不允许重复值，或可以插入到左/右子树）。这里我们假设不允许重复，则不插入或进行其他处理（或用计数来计算）。",
          "**代码：**",
          "```cpp\n// 插入\nTreeNode* InsertBSTNode(TreeNode* root, int value){\n    if (root == nullptr)\n        return new TreeNode(value);",
          "if (root -> value < value)\n        root -> right = InsertBSTNode(root -> right, value);\n    else\n        root -> left = InsertBSTNode(root -> left, value);",
          "return root;\n}\n```"
        ]
      },
      {
        "heading": "3.3 查找",
        "paragraphs": [
          "**目标：**在树中查找一个数是否存在",
          "**步骤：**",
          "1.  从根节点开始比较，如果根节点不存在或根节点的值等于目标值则返回\n2.  如果目标值大于根节点的值，则递归地向右节点查找\n3.  如果目标值小于根节点的值，则递归的向左节点查找",
          "**代码：**",
          "```cpp\nTreeNode* SearchBSTNode(TreeNode* root, int value){\n    if (root == nullptr || root -> value == value)\n        return root;",
          "if (value > root -> value) return SearchBSTNode(root -> right, value);\n    else return SearchBSTNode(root -> left, value);\n}\n```"
        ]
      },
      {
        "heading": "3.4 删除",
        "paragraphs": [
          "**目标：**在树中查找一个数，并将其删除",
          "**步骤：**",
          "1.  找到要删除的节点，并删除\n    \n2.  情况一：该节点为叶节点，直接删除该节点即可\n    \n3.  情况二：该节点有只有一个子节点，则将其对应的子节点代替即可\n    \n4.  情况三：该节点有两个子节点（最复杂情况）\n    \n    -   找到对应的该节点中序遍历最小（大）的值\n    -   让最小（大）值替换该值\n    -   然后递归删除那个最值节点\n    \n    **代码：**\n    \n    ```cpp\n    // 查找最小值\n    TreeNode* FindMinNode(TreeNode root){\n       while (root -> left != nullptr){\n           root = root -> left; \n       }\n       return root;\n    }\n    \n    // 删除节点\n    TreeNode* DeleteBSTNode(TreeNode* root, int value) {\n       if (root == nullptr) return root;\n       if (value < root -> value) root -> left = DeleteBSTNode(root -> left, value);\n       else if (value > root -> value) root -> right = DeleteBSTNode(root -> right, value);\n       else {\n           if (root -> left == nullptr) {\n               TreeNode* temp = root -> left;\n               root -> value = temp -> value;\n               delete temp;\n               return root;\n           }\n           else if (root -> right == nullptr) {\n               TreeNode* temp = root -> right;\n               root -> value = temp -> value;\n               delete temp;\n               return root;\n           }\n    \n           TreeNode* minNode = FindMinNode(root);\n           root -> value = minNode -> value;\n           root -> right = DeleteBSTNode(root -> right, mindNode -> value);\n       }\n       return root;\n    }\n    ```"
        ]
      },
      {
        "heading": "3.5 示例代码",
        "paragraphs": [
          "```cpp\n#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\nusing namespace std;",
          "struct TreeNode {\n    int value;\n    TreeNode* left;\n    TreeNode* right;",
          "TreeNode(int x) : value(x), left(nullptr), right(nullptr) {}\n};",
          "class BST{",
          "private:\n    TreeNode* root;",
          "// 插入\n    TreeNode* InsertBSTNode(TreeNode* root, int value){\n        if (root == nullptr)\n            return new TreeNode(value);",
          "if (root -> value < value)\n            root -> right = InsertBSTNode(root -> right, value);\n        else\n            root -> left = InsertBSTNode(root -> left, value);",
          "return root;\n    }",
          "// 查找 \n    TreeNode* SearchBSTNode(TreeNode* root, int target){\n        if (root == nullptr || root -> value == target)\n            return root;",
          "if (root -> value < target) SearchBSTNode(root -> right, target);\n        else SearchBSTNode(root -> left, target); \n        // return root;\n    }",
          "// 删除 \n    TreeNode* DeleteBSTNode(TreeNode* root, int key){\n        if (root == nullptr)\n            return nullptr;",
          "if (key < root -> value)\n            root -> left = DeleteBSTNode(root -> left, key);\n        else if (key > root -> value)\n            root -> right = DeleteBSTNode(root -> right, key);\n        else{\n            // 如果左子树为空, 替换右边节点 \n            if (root -> left == nullptr){\n                TreeNode* temp = root -> right;\n                delete root;\n                return temp;\n            }\n            // 如果右子树为空，直接替换左边节点 \n            else if (root -> right == nullptr){\n                TreeNode* temp = root -> left;\n                delete root;\n                return temp;\n            }",
          "// 找到最小的节点 \n            TreeNode* minNode = FindMinBSTNode(root -> right);\n            // 替换 \n            root -> value = minNode -> value;\n            // 删除之前最小的节点 \n            root -> right = DeleteBSTNode(root -> right, minNode -> value);\n        }\n        return root;\n    }",
          "// 查找最小数值 \n    TreeNode* FindMinBSTNode(TreeNode* root){\n        while (root -> left != nullptr){\n            root = root -> left;\n        }\n        return root;\n    }",
          "// 中序遍历 \n    void InorderRecursive(TreeNode* root, vector<int> &res) {\n        if (root == nullptr) return;",
          "InorderRecursive(root -> left, res);\n        res.push_back(root -> value);\n        InorderRecursive(root -> right, res);\n    }",
          "// 清空树\n    void clear() {\n        clearRecursive(root);\n        root = nullptr;\n    }",
          "void clearRecursive(TreeNode* node) {\n        if (node == nullptr) return;\n        clearRecursive(node -> left);\n        clearRecursive(node -> right);\n        delete node;\n    }",
          "public:\n    // 构造函数 \n    BST(): root(nullptr) {}",
          "~BST(){\n        clear(); \n    }",
          "// 插入操作 \n    void Insert(int value){\n        root = InsertBSTNode(root, value);\n    }",
          "// 查询操作 \n    bool Search(int value){\n        return SearchBSTNode(root, value) != nullptr;\n    }",
          "// 移除操作 \n    void Remove(int value){\n        DeleteBSTNode(root, value);\n    }",
          "// 中序遍历（升序）\n    vector<int> Inorder() {\n        vector<int> result;\n        InorderRecursive(root, result);\n        return result;\n    }\n}; \nint main() {\n    BST bst;",
          "cout << \"=== 二叉搜索树测试 ===\" << endl;",
          "// 插入测试\n    vector<int> values = {50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45};",
          "for (int val : values) {\n        cout << \"插入数值: \";\n        cout << val << \" \";\n        bst.Insert(val);",
          "// 遍历测试\n        cout << \"中序遍历 (升序): \";\n        vector<int> inorder = bst.Inorder();\n            for (int val : inorder) {\n                cout << val << \" \";\n        } \n        cout << endl;\n    }",
          "// 查找测试 \n    vector<int> findValues = {80, 66, 20, 30};\n    for (int val : findValues){\n        cout << \"搜索数值: \";\n        cout << val << \" \";",
          "bool isFind = bst.Search(val);\n        cout << (isFind ? \"查找到\" : \"未找到\") << endl;\n    }",
          "// 删除测试 \n    vector<int> removeValues = {40, 60, 80, 66, 35, 45};",
          "for (int val : removeValues) {\n        cout << \"删除数值: \";\n        cout << val << \" \";\n        bst.Remove(val);",
          "// 遍历测试\n        cout << \"中序遍历 (升序): \";\n        vector<int> inorder = bst.Inorder();\n            for (int val : inorder) {\n                cout << val << \" \";\n        } \n        cout << endl;\n    }\n    return 0;\n}\n```"
        ]
      },
      {
        "heading": "四、 二叉搜索树的缺陷：不平衡问题",
        "paragraphs": [
          "二叉搜索树的性能严重依赖于树的**高度**。如果树是平衡的（例如 `` `AVL` `` 树、红黑树），高度约为 log₂n，操作效率很高。",
          "但是，如果按照特定顺序插入节点（例如依次插入 1, 2, 3, 4, 5），树会退化成一条**链表**，高度变为 `n`。此时，所有操作的时间复杂度都退化为 **O(n)**，效率极低。",
          "**解决方案**：使用**自平衡二叉搜索树**，如`` `AVL` `` 树、红黑树等。它们在插入和删除时会通过旋转等操作自动调整树的结构，保持树的平衡。"
        ]
      },
      {
        "heading": "五、 总结",
        "paragraphs": [
          "| 特性/操作 | 描述 | 平均/最好时间复杂度 | 最坏时间复杂度（退化成链表） |\n| --- | --- | --- | --- |\n| **查找** | 根据值的大小在左/右子树中搜索 | O(log n) | O(n) |\n| **插入** | 在适当位置创建新叶子节点 | O(log n) | O(n) |\n| **删除** | 分三种情况处理 | O(log n) | O(n) |\n| **中序遍历** | 按升序输出所有节点 | O(n) | O(n) |\n| **空间复杂度** |  | O(n) | O(n) |",
          "二叉搜索树是理解更高级树结构（如 `` `AVL` `` 树、红黑树、B 树）的基础。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-47",
    "tags": [
      "算法"
    ],
    "categoryId": "algorithm",
    "title": "平衡二叉树",
    "date": "2025-10-30",
    "cover": "📐",
    "excerpt": "一、 什么是平衡二叉树？ 1.1 基本概念 平衡二叉树是一种特殊的二叉搜索树，它通过特定的平衡机制确保树的高度始终保持在对数级别。（解决了二叉搜索树的极端情况） 1.2 平衡条件 对于树中的任意节点，其左子树和右子树的高度差绝对值不超过1：...",
    "sections": [
      {
        "heading": "1.1 基本概念",
        "paragraphs": [
          "**平衡二叉树**是一种特殊的二叉搜索树，它通过特定的平衡机制确保树的高度始终保持在对数级别。（解决了二叉搜索树的极端情况）"
        ]
      },
      {
        "heading": "1.2 平衡条件",
        "paragraphs": [
          "对于树中的任意节点，其**左子树和右子树的高度差绝对值不超过1**：",
          "```\n平衡因子 = 左子树高度 - 右子树高度 （注： 左 - 右）\n平衡条件：|平衡因子| ≤ 1\n```"
        ]
      },
      {
        "heading": "2.1 二叉搜索树的退化问题",
        "paragraphs": [
          "**有序插入导致链表化**：",
          "```\n插入序列：1, 2, 3, 4, 5",
          "普通BST：\n    1\n      \\\n        2\n          \\\n            3\n              \\\n                4\n                  \\\n                    5\n高度：5，退化成链表！\n```",
          "**平衡`BST`**：",
          "```\n    2\n   / \\\n  1   4\n     / \\\n    3   5\n高度：3，保持平衡！\n```"
        ]
      },
      {
        "heading": "3.1 树结构",
        "paragraphs": [
          "```cpp\nstruct AVLNode {\n    int value,\n    int height,\n    AVLNode* left, right;\n    AVLNode(int x) value(x), height(1), left(nullptr), right(nullptr) {}\n}\n```"
        ]
      },
      {
        "heading": "3.2 AVL的基本方法",
        "paragraphs": [
          "```cpp\nint getHeight(AVLNode* root) {\n    return root ? root -> height : 0;\n}",
          "void updateHeight(AVLNode* root) {\n    if (root)\n        root -> height = 1 + max(getHeight(root -> left), getHeight(root -> right));\n}",
          "int getBalanceFactor(AVLNode* root) {\n    return root ? getHeight(root -> left) - getHeight(root -> right) : 0;\n}\n```"
        ]
      },
      {
        "heading": "3.3.1 LL型（右旋）",
        "paragraphs": [
          "```\n      A (平衡因子=2)                                  B\n     /                      右旋操作                 / \\\n   B (平衡因子=1)       ================>           C   A\n  /   \\                                           /\nC     D                                          D\n```",
          "**代码实现：**",
          "```cpp\n// 判断条件: 当前节点的平衡因子大于1, 并且当前节点的左子树的平衡因子大于等于0 \n// getBalanceFactor(A) > 1 && getBalanceFactor(B) >= 0\nAVLNode* rightRotate(AVLNode* A){\n    AVLNode* B = A -> left;\n    AVLNode* D = B -> right;",
          "B -> right = A;\n    A -> right = D;",
          "updateHeight(A);\n    updateHeight(B);",
          "return B;\n}\n```"
        ]
      },
      {
        "heading": "3.3.2 RR型（左旋）",
        "paragraphs": [
          "```\nA (平衡因子=-2                                         B\n  \\                         左旋操作                  / \\\n   B (平衡因子=0)       ================>            A   C\n /   \\                                                   \\\nD     C                                                   D\n```",
          "**代码实现：**",
          "```cpp\n// 判断条件： 当前节点的平衡因子小于1，且当前节点的左子树的平衡因子小于等于0\n// getBalanceFactor(A) < 1， getBalanceFactor(B) <= 0\nAVLNode* leftRotate(AVLNode* A) {\n    AVLNode* B = A -> right;\n    AVLNode* D = B -> left;",
          "B -> left = A;\n    A -> right = D;",
          "updateHeight(A);\n    updateHeight(B);\n    return B;\n}\n```"
        ]
      },
      {
        "heading": "3.3.3 LR型 (先左旋再右旋)",
        "paragraphs": [
          "```\n     A (平衡因子=2)                         A                                  C\n   /                      左旋             /                右旋              / \\\n  B (平衡因子=-1)       ========>         C               ========>          B   A\n    \\                                   /\n     C                                 B\n```",
          "**代码示例：**",
          "```cpp\n// 判断条件：当前节点的平衡因子大于1，且当前节点的左子树平衡因子小于0\n// getBalanceFactor(A) > 1 &&  getBalanceFactor(A -> left) <0\nAVLNode* leftRightRotate(AVLNode* A){\n    A -> left = leftRotate(A -> left);\n    return rightRotate(A);\n}\n```"
        ]
      },
      {
        "heading": "3.3.4 RL型（先右旋再左旋）",
        "paragraphs": [
          "```\n     A (平衡因子=-2)                                  A                                     C\n        \\                         右旋                 \\                   左旋            /  \\\n          B (平衡因子=1)        ========>               C               ========>         A    B\n        /                                                \\\n     C                                                    B\n```",
          "```cpp\n// 判断条件：当前节点的平衡因子小于-1，且右子树平衡因子大于0\n// getBalaceFactor(A) < -1 &&  getBalanceFactor(A -> right) > 0;\nAVLNode* rightLeftRotate(AVLNode* A) {\n    A -> right = rightRotate(A -> right);\n    return leftRotate(A);\n}\n```"
        ]
      },
      {
        "heading": "3.4.1 查找操作",
        "paragraphs": [
          "查找操作和二叉搜索树是一样的方式",
          "```cpp\nAVLNode* findAVLNode(AVLNode* root, int value) {\n    if (root == nullptr || root -> value == value)\n        return root;",
          "if (value > root -> value)\n        retturn findAVLNode(root -> right, value);\n    else (value < root -> value)\n        return findAVLNode(root -> left, value);\n}\n```"
        ]
      },
      {
        "heading": "3.4.2 平衡操作",
        "paragraphs": [
          "**步骤：**",
          "1.  更新当前节点的高度\n2.  根据类型去平衡二叉树",
          "**代码：**",
          "```cpp\nAVLNode* balanceAVLNode(AVLNode* root) {\n    updateHeight(root);",
          "int balanceFactor = getBalanceFactor(root);",
          "if (balanceFatcor > 1 && getBalanceFactor(root -> left) >= 0) \n        rightRotate(root);\n    else if (balanceFactor > 1 && getBalanceFactor(root -> left) < 0)\n        leftRightRotate(root);\n    else if (balanceFactor < 1 && getBalanceFactor(root -> right) <= 0)\n        leftRotate(root);\n    else if (balanceFactor < 1 && getBalanceFactor(root -> right) > 0)\n        rightLeftRotate(root);",
          "return root;\n}\n```"
        ]
      },
      {
        "heading": "3.4.3 插入操作",
        "paragraphs": [
          "**代码：**",
          "```cpp\nAVLNode* insertAVLNode(AVLNode* root, int value) {\n    if (root == nullptr) \n        return new AVLNode(value);",
          "if (value > root -> value) root -> right = insertAVLNode(root -> right, value);\n    else if (value < root -> value) root -> left = insertAVLNode(root -> left, value);\n    else return root;",
          "// 平衡操作\n    return balanceAVLNode(root);\n}\n```"
        ]
      },
      {
        "heading": "3.4.4 删除操作",
        "paragraphs": [
          "**代码：**",
          "```cpp\nAVLNode* findMinNode(AVLNode* root) {\n    if (root && root -> left != nullptr){\n        root = root -> left;\n    }\n    return root;\n}",
          "AVLNode* deleteAVLNode(AVLNode* root, int value) {\n    if (root == nullptr)\n        return root;",
          "if (value > root -> value) root -> right = deleteAVLNode(root -> right, value);\n    else if (value < root -> value) root -> left = deleteAVLNode(root -> left, value);\n    else {\n        if (root -> left == nullptr) {\n            AVLNode* temp = root -> right;\n            *root = *temp;\n            delete temp\n        }\n        else if (root -> right = nullptr){\n            AVLNode* temp = root -> left;\n            *root = *temp;\n            delete temp;\n        }\n        else {\n             AVLNode* minNode = findAVLNode(root -> right);\n            root -> value = minNode -> value;\n            return deleteAVL(root -> right, minNode -> value);\n        }\n    }\n    if (root == nullptr) return root;",
          "return updateBalanceNode(root);\n}\n```"
        ]
      },
      {
        "heading": "四、示例代码",
        "paragraphs": [
          "```cpp\n#include <iostream>\n#include <vector>\nusing namespace std;",
          "struct AVLNode{\n    int height; // 平衡因子 \n    int value;\n    AVLNode* left;\n    AVLNode* right;",
          "AVLNode(int x) : value(x), height(1), left(nullptr), right(nullptr) {}\n};",
          "class AVLTree{",
          "private:\n    AVLNode* root;",
          "// 获得节点高度 \n    int getHeight(AVLNode* node) {\n        return node ? node -> height : 0;\n    }",
          "// 更新节点高度\n    void updateHeight(AVLNode* node) {\n        if (node)\n            node -> height = 1 + max (getHeight(node -> left), getHeight(node -> right));\n    }",
          "// 获得平衡因子 \n    int getBalanceFactor(AVLNode* node){\n        return node ? (getHeight(node -> left) - getHeight(node -> right)) : 0;\n    }",
          "// LL右旋 \n    AVLNode* rightRotate(AVLNode* A){\n        AVLNode* B = A -> left;\n        AVLNode* D = B -> right;",
          "// 执行旋转\n        B -> right = A;\n        A -> left = D;",
          "// 更新高度 \n        updateHeight(A);\n        updateHeight(B);",
          "// 返回根节点 \n        return B;\n    }",
          "// RR左旋  \n    AVLNode* leftRotate(AVLNode* A){\n        AVLNode* B = A -> right;\n        AVLNode* D = B -> left;",
          "B -> left = A;\n        A -> right = D;\n        updateHeight(A);\n        updateHeight(B);",
          "return B; \n    }",
          "// LR 先左旋再右旋 \n    AVLNode* leftRightRotate(AVLNode* A){\n        A -> left = leftRotate(A -> left);\n        return rightRotate(A); \n    }",
          "// RL 先右旋在左旋 \n    AVLNode* rightLeftRotate(AVLNode* A){\n        A -> right = rightRotate(A -> right);\n        return leftRotate(A); \n    }",
          "// 插入操作 \n    AVLNode* insertAVLNode(AVLNode* root, int value){\n        if (root == nullptr)\n            return new AVLNode(value);",
          "if (value > root -> value) root -> right = insertAVLNode(root -> right, value);\n        else if (value < root -> value) root -> left = insertAVLNode(root -> left, value);\n        else{\n            return root;\n        }",
          "return balanceAVLNode(root);\n    }",
          "// 删除(插入)平衡操作\n    AVLNode* balanceAVLNode(AVLNode* root){\n        // 更新高度 \n        updateHeight(root);\n        // 获得平衡因子 \n        int balance = getBalanceFactor(root);",
          "// 平衡调整\n        if (balance > 1 && getBalanceFactor(root -> left) >= 0){\n            return rightRotate(root);\n        }",
          "if (balance > 1 && getBalanceFactor(root -> left) < 0){\n            return leftRightRotate(root);\n        }",
          "if (balance < -1 && getBalanceFactor(root -> right) <= 0){\n            return leftRotate(root);\n        }",
          "if (balance < -1 && getBalanceFactor(root -> right) > 0){\n            return rightLeftRotate(root);\n        }\n        // 不需要调整\n        return root;\n    }",
          "AVLNode* findMinNode(AVLNode* root){\n        while (root && root -> left != nullptr)\n            root = root -> left;",
          "return root;\n    }",
          "// 删除操作 \n    AVLNode* deleteAVLNode(AVLNode* root, int value){\n        if (root == nullptr)\n            return nullptr;",
          "if (value < root -> value) root -> left = deleteAVLNode(root -> left, value);\n        else if (value > root -> value) root -> right = deleteAVLNode(root -> right, value);\n        else{\n            if (root -> left == nullptr){\n                AVLNode* temp = root -> right;\n                delete root;\n                root = temp;\n            }\n            else if (root -> right == nullptr){\n                AVLNode* temp = root -> left;\n                delete root;\n                root = temp;\n            }\n            else{\n                AVLNode* temp = findMinNode(root -> right);\n                root -> value = temp -> value;\n                root -> right = deleteAVLNode(root -> right, temp -> value);\n            }\n        }",
          "if (root == nullptr) return nullptr;",
          "return balanceAVLNode(root);\n    }",
          "AVLNode* findAVLNode(AVLNode* root, int value){\n        if (root == nullptr || root -> value == value)\n            return root;",
          "if (value > root -> value) return findAVLNode(root -> right, value);\n        else return findAVLNode(root -> left, value);\n    }",
          "// 中序遍历 \n    void inorderRecursive(AVLNode* root, vector<int> &res) {\n        if (root == nullptr) return;",
          "inorderRecursive(root -> left, res);\n        res.push_back(root -> value);\n        inorderRecursive(root -> right, res);\n    }",
          "public:\n    AVLTree() : root(nullptr) {}",
          "void insert(int value){\n        root = insertAVLNode(root, value); \n    }",
          "void remove(int value){\n        root = deleteAVLNode(root, value);\n    }",
          "bool find(int value){\n        return findAVLNode(root, value) != nullptr;\n    }",
          "// 中序遍历（升序）\n    vector<int> inorder() {\n        vector<int> result;\n        inorderRecursive(root, result);\n        return result;\n    }",
          "int getHeight(int value){\n        AVLNode* temp = findAVLNode(root, value);\n        return temp != nullptr ? getHeight(temp) : 0;\n    }",
          "int getBalanceFatcor(int value){\n        AVLNode* temp = findAVLNode(root, value);\n        return temp != nullptr ? getBalanceFactor(temp) : 0;\n    }\n};",
          "int main() {\n    AVLTree tree;",
          "cout << \"=== 平衡二叉树测试 ===\" << endl;",
          "// 插入测试\n    vector<int> values = {50, 30, 70, 20, 40};",
          "for (int val: values) {\n        cout << \"插入数值: \";\n        cout << val << \" \";\n        tree.insert(val);",
          "vector<int> in = tree.inorder();\n        for (int val1 : in) {\n            cout << val1 << \": Height: \" << tree.getHeight(val1) << \" BalanceFactor \" << tree.getBalanceFatcor(val1) << \" \";\n        }\n        cout << endl; \n    }",
          "// 插入测试\n    values = {30, 70, 40};",
          "for (int val: values) {\n        cout << \"删除数值: \";\n        cout << val << \" \";\n        tree.remove(val);",
          "vector<int> in = tree.inorder();\n        for (int val1 : in) {\n            cout << val1 << \": Height: \" << tree.getHeight(val1) << \" BalanceFactor \" << tree.getBalanceFatcor(val1) << \" \";\n        }\n        cout << endl; \n    } \n    return 0;\n}\n```"
        ]
      },
      {
        "heading": "五、总结",
        "paragraphs": [
          "**时间复杂度：**",
          "| 操作 | 时间复杂度 | 说明 |\n| --- | --- | --- |\n| **查找** | O(log n) | 树高度为 O(log n) |\n| **插入** | O(log n) | 查找 + 最多两次旋转 |\n| **删除** | O(log n) | 查找 + 最多两次旋转 |\n| **旋转** | O(1) | 只涉及常数次指针操作 |\n| **空间** | O(n) | 存储n个节点 |",
          "1.  **数据库系统**：索引结构保证查询效率\n2.  **文件系统**：目录树管理\n3.  **编译器**：符号表管理\n4.  **实时系统**：保证最坏情况性能\n5.  **游戏开发**：场景管理、碰撞检测",
          "通过旋转操作，平衡二叉树能够在插入和删除时自动调整结构，确保树的高度始终保持在 O(log n) 级别，从而保证所有操作的高效性。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-48",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "UGUI的输入与事件模块",
    "date": "2025-11-12",
    "cover": "🎮",
    "excerpt": "前言 UGUI把输入事件分为四个模块。分别是 事件数据模块 输入事件捕获模块 射线碰撞检测模块 事件逻辑处理以及回调模块 一、事件数据模块 事件数据模块主要是获得数据，提供数据服务。主要存储了事件发生的位置、事件对应的物体、事件的位移大小。...",
    "sections": [
      {
        "heading": "前言",
        "paragraphs": [
          "UGUI把输入事件分为四个模块。分别是",
          "1.  **事件数据模块**\n2.  **输入事件捕获模块**\n3.  **射线碰撞检测模块**\n4.  **事件逻辑处理以及回调模块**",
          "![](@img/a0dxub41)"
        ]
      },
      {
        "heading": "一、事件数据模块",
        "paragraphs": [
          "事件数据模块主要是**获得数据，提供数据服务**。主要存储了事件发生的位置、事件对应的物体、事件的位移大小。触发事件的输入类型。以及事件的设备信息等。",
          "主要为三个类：`BaseEventData`、`PointerEventData`、`AxisEventData`,分别为事件数据基类，点位事件数据类、滚轮事件数据基类。其中`PointerEventData`和`AxisEventData`都继承于`BaseEventData`。"
        ]
      },
      {
        "heading": "1.1 BaseEventData类",
        "paragraphs": [
          "事件数据的基类，有`EventSystem`（事件系统）、`currentInputModule`（当前输入模块）、`selectedObject`（当前选择物体）、`used`(该事件是否被使用)",
          "```csharp\nnamespace UnityEngine.EventSystems\n{\n    public abstract class AbstractEventData\n    {\n        protected bool m_Used; // 是否被使用",
          "public virtual void Reset()\n        {\n            m_Used = false;\n        }",
          "public virtual void Use()\n        {\n            m_Used = true;\n        }",
          "public virtual bool used\n        {\n            get { return m_Used; }\n        }\n    }",
          "public class BaseEventData : AbstractEventData\n    {\n        private readonly EventSystem m_EventSystem; // 事件系统\n        public BaseEventData(EventSystem eventSystem)\n        {\n            m_EventSystem = eventSystem;\n        }",
          "public BaseInputModule currentInputModule // 当前输入模块\n        {\n            get { return m_EventSystem.currentInputModule; }\n        }",
          "public GameObject selectedObject // 当前选择物体\n        {\n            get { return m_EventSystem.currentSelectedGameObject; }\n            set { m_EventSystem.SetSelectedGameObject(value, this); }\n        }\n    }\n}\n```"
        ]
      },
      {
        "heading": "1.2 AxisEventData类",
        "paragraphs": [
          "其主要存储滚轮的**移动方向**和**移动距离**。",
          "```csharp\nnamespace UnityEngine.EventSystems\n{\n    public class AxisEventData : BaseEventData\n    {\n        public Vector2 moveVector { get; set; } // 移动距离",
          "public MoveDirection moveDir { get; set; } // 移动方向",
          "public AxisEventData(EventSystem eventSystem) : base(eventSystem)\n        {\n            moveVector = Vector2.zero;\n            moveDir = MoveDirection.None;\n        }\n    }\n}\n```"
        ]
      },
      {
        "heading": "1.3 PointerEventData类",
        "paragraphs": [
          "```csharp\nusing System;\nusing System.Text;\nusing System.Collections.Generic;",
          "namespace UnityEngine.EventSystems\n{\n    /// <summary>\n    /// 每次点击事件都会创建一个此类实例\n    /// </summary>\n    public class PointerEventData : BaseEventData\n    {\n        // 输入按钮\n        public enum InputButton\n        {\n            Left = 0,\n            Right = 1,\n            Middle = 2\n        }",
          "/// <summary>\n        /// 按键按下的状态\n        /// </summary>\n        public enum FramePressState\n        {\n            // 此帧按下了按键。\n            Pressed,\n            // 此帧释放了按键。\n            Released,\n            // 此帧按下并释放了按键。\n            PressedAndReleased,\n            // 与上一帧相同。\n            NotChanged\n        }",
          "public GameObject pointerEnter { get; set; }\n        private GameObject m_PointerPress;\n        // 最后一个按下事件的原始 GameObject。这意味着即使它本身不能接收按下事件，它也是“被按下”的 GameObject。\n        public GameObject lastPress { get; private set; }",
          "//  发生按下事件的对象，即使它不能处理该按下事件。\n        public GameObject rawPointerPress { get; set; }\n        public GameObject pointerDrag { get; set; }\n        public GameObject pointerClick { get; set; }",
          "// 与当前事件关联的射线检测结果。\n        public RaycastResult pointerCurrentRaycast { get; set; }\n        // 与指针按下事件关联的射线检测结果。\n        public RaycastResult pointerPressRaycast { get; set; }",
          "public List<GameObject> hovered = new List<GameObject>();",
          "// 当前帧是否可以进行点击。\n        public bool eligibleForClick { get; set; }",
          "// 此指针事件来源的显示器索引。\n        public int displayIndex { get; set; }",
          "// 指针的 ID（触摸 ID）。\n        public int pointerId { get; set; }",
          "// 当前指针位置。\n        public Vector2 position { get; set; }",
          "// 自上次更新以来的指针移动量。\n        public Vector2 delta { get; set; }",
          "// 按下时的位置。\n        public Vector2 pressPosition { get; set; }",
          "/// <summary>\n        /// World-space position where a ray cast into the screen hits something\n        /// </summary>",
          "[Obsolete(\"Use either pointerCurrentRaycast.worldPosition or pointerPressRaycast.worldPosition\")]\n        public Vector3 worldPosition { get; set; }",
          "/// <summary>\n        /// World-space normal where a ray cast into the screen hits something\n        /// </summary>\n        [Obsolete(\"Use either pointerCurrentRaycast.worldNormal or pointerPressRaycast.worldNormal\")]\n        public Vector3 worldNormal { get; set; }",
          "// 上次发送点击事件的时间。用于处理双击。\n        public float clickTime { get; set; }",
          "// 连续点击的次数。\n        public int clickCount { get; set; }",
          "// /// 自上次更新以来的滚动量。\n        public Vector2 scrollDelta { get; set; }",
          "public bool useDragThreshold { get; set; }",
          "// 当前是否正在进行拖拽操作。\n        public bool dragging { get; set; }",
          "// 此事件的 EventSystems.PointerEventData.InputButton。\n        public InputButton button { get; set; }",
          "// 当前触摸施加的压力大小。\n        public float pressure { get; set; }\n        // 应用于触控笔上附加压力敏感控件的压力。\n        public float tangentialPressure { get; set; }",
          "// 触控笔相对于表面的角度（以弧度表示）。\n        public float altitudeAngle { get; set; }",
          "// 值为 0 表示触控笔与表面平行。值为 pi/2 表示它与表面垂直。\n        public float azimuthAngle { get; set; }",
          "// 触控笔相对于 x 轴的角度（以弧度表示）。\n        public float twist { get; set; }",
          "// 指定触控笔相对于 X 和 Y 轴的角度（以弧度表示）\n        public Vector2 tilt { get; set; }",
          "// 指定触控笔的状态。例如，触控笔是否与屏幕或数位板接触，触控笔是否倒置，以及是否有按键被按下。\n        public PenStatus penStatus { get; set; }",
          "// 触摸半径的估计值。\n        public Vector2 radius { get; set; }",
          "// 触摸半径的精确度。\n        public Vector2 radiusVariance { get; set; }",
          "// 在指针退出的情况下，指定指针是完全退出了区域还是刚刚进入了子对象。\n        public bool fullyExited { get; set; }",
          "// 在指针进入的情况下，指定指针是进入了一个新区域还是在离开子对象后刚刚重新进入了父对象。\n        public bool reentered { get; set; }",
          "public PointerEventData(EventSystem eventSystem) : base(eventSystem)\n        {\n            eligibleForClick = false;",
          "displayIndex = 0;\n            pointerId = -1;\n            position = Vector2.zero; // Current position of the mouse or touch event\n            delta = Vector2.zero; // Delta since last update\n            pressPosition = Vector2.zero; // Delta since the event started being tracked\n            clickTime = 0.0f; // The last time a click event was sent out (used for double-clicks)\n            clickCount = 0; // Number of clicks in a row. 2 for a double-click for example.",
          "scrollDelta = Vector2.zero;\n            useDragThreshold = true;\n            dragging = false;\n            button = InputButton.Left;",
          "pressure = 0f;\n            tangentialPressure = 0f;\n            altitudeAngle = 0f;\n            azimuthAngle = 0f;\n            twist = 0f;\n            tilt = new Vector2(0f, 0f);\n            penStatus = PenStatus.None;\n            radius = Vector2.zero;\n            radiusVariance = Vector2.zero;\n        }",
          "// 指针是否正在移动。\n        public bool IsPointerMoving()\n        {\n            return delta.sqrMagnitude > 0.0f;\n        }",
          "// 输入设备是否正在滚动。\n        public bool IsScrolling()\n        {\n            return scrollDelta.sqrMagnitude > 0.0f;\n        }",
          "// 与最后一次 OnPointerEnter 事件关联的摄像机。\n        public Camera enterEventCamera\n        {\n            get { return pointerCurrentRaycast.module == null ? null : pointerCurrentRaycast.module.eventCamera; }\n        }",
          "// 与最后一次 OnPointerPress 事件关联的摄像机。\n        public Camera pressEventCamera\n        {\n            get { return pointerPressRaycast.module == null ? null : pointerPressRaycast.module.eventCamera; }\n        }",
          "// 接收到 OnPointerDown 事件的 GameObject。\n        public GameObject pointerPress\n        {\n            get { return m_PointerPress; }\n            set\n            {\n                if (m_PointerPress == value)\n                    return;",
          "lastPress = m_PointerPress;\n                m_PointerPress = value;\n            }\n        }",
          "public override string ToString()\n        {\n            var sb = new StringBuilder();\n            sb.AppendLine(\"<b>Position</b>: \" + position);\n            sb.AppendLine(\"<b>delta</b>: \" + delta);\n            sb.AppendLine(\"<b>eligibleForClick</b>: \" + eligibleForClick);\n            sb.AppendLine(\"<b>pointerEnter</b>: \" + pointerEnter);\n            sb.AppendLine(\"<b>pointerPress</b>: \" + pointerPress);\n            sb.AppendLine(\"<b>lastPointerPress</b>: \" + lastPress);\n            sb.AppendLine(\"<b>pointerDrag</b>: \" + pointerDrag);\n            sb.AppendLine(\"<b>Use Drag Threshold</b>: \" + useDragThreshold);\n            sb.AppendLine(\"<b>Current Raycast:</b>\");\n            sb.AppendLine(pointerCurrentRaycast.ToString());\n            sb.AppendLine(\"<b>Press Raycast:</b>\");\n            sb.AppendLine(pointerPressRaycast.ToString());\n            sb.AppendLine(\"<b>Display Index:</b>\");\n            sb.AppendLine(displayIndex.ToString());\n            sb.AppendLine(\"<b>pressure</b>: \" + pressure);\n            sb.AppendLine(\"<b>tangentialPressure</b>: \" + tangentialPressure);\n            sb.AppendLine(\"<b>altitudeAngle</b>: \" + altitudeAngle);\n            sb.AppendLine(\"<b>azimuthAngle</b>: \" + azimuthAngle);\n            sb.AppendLine(\"<b>twist</b>: \" + twist);\n            sb.AppendLine(\"<b>tilt</b>: \" + tilt);\n            sb.AppendLine(\"<b>penStatus</b>: \" + penStatus);\n            sb.AppendLine(\"<b>radius</b>: \" + radius);\n            sb.AppendLine(\"<b>radiusVariance</b>: \" + radiusVariance);\n            return sb.ToString();\n        }\n    }\n}\n```"
        ]
      },
      {
        "heading": "二、输入事件捕获模块",
        "paragraphs": [
          "输入事件捕获模块主要由四个类组成，`BaseInputModule(抽象基类)`、`PointerInputMoudle`、`StandaloneInputModule`、`TouchInputModule`",
          "1.  `PointerInputModule`继承了`BaseInputModule`,拓展了关于**点位**的输入逻辑，也增加了输入的类型和状态\n2.  `StandaloneInputModule`继承了`PointerInputModule`,并向标准键盘、鼠标方向拓展。\n3.  `TouchInputModule`向触控板输入方向拓展。"
        ]
      },
      {
        "heading": "2.1 ProcessMouseEvent函数",
        "paragraphs": [
          "`StandaloneInputModule`的主函数`ProcessMouseEvent（主要由PointerInputModule和StandaloneInputModule）`:从鼠标键盘输入事件上扩展了输入的逻辑，处理了鼠标的按下，移动，滚轮，拖拽的操作事件。其中`ProcessMousePress`、`ProcessMove`、`ProcessDrag`。从`EventSystem`中调用的",
          "```csharp\n        protected void ProcessMouseEvent(int id)\n        {\n            // mouseState: 鼠标状态\n            MouseState mouseData = GetMousePointerEventData(id);\n            //  MouseButtonEventData：鼠标按钮状态（包括PointerEventData）\n            MouseButtonEventData leftButtonData = mouseData.GetButtonState(PointerEventData.InputButton.Left).eventData;\n       // 左键点击的物体设置为当前聚焦物体\n            m_CurrentFocusedGameObject = leftButtonData.buttonData.pointerCurrentRaycast.gameObject;",
          "// 处理鼠标左键按下，移动，拖拽事件\n            ProcessMousePress(leftButtonData);\n            ProcessMove(leftButtonData.buttonData);\n            ProcessDrag(leftButtonData.buttonData);",
          "// 处理鼠标右键和中间按下，拖拽事件\n            ProcessMousePress(mouseData.GetButtonState(PointerEventData.InputButton.Right).eventData);\n            ProcessDrag(mouseData.GetButtonState(PointerEventData.InputButton.Right).eventData.buttonData);\n            ProcessMousePress(mouseData.GetButtonState(PointerEventData.InputButton.Middle).eventData);\n            ProcessDrag(mouseData.GetButtonState(PointerEventData.InputButton.Middle).eventData.buttonData);",
          "// 左键滚动\n            if (!Mathf.Approximately(leftButtonData.buttonData.scrollDelta.sqrMagnitude, 0.0f))\n            {\n                var scrollHandler = ExecuteEvents.GetEventHandler<IScrollHandler>(leftButtonData.buttonData.pointerCurrentRaycast.gameObject);\n                ExecuteEvents.ExecuteHierarchy(scrollHandler, leftButtonData.buttonData, ExecuteEvents.scrollHandler);\n            }\n        }\n```",
          "`ProcessMousePress`:处理鼠标按下事件的代码，同时也处理鼠标抬起的操作，以及处理了拖拽抬起与结束的事件。在调用处理相关句柄的前后，事件数据都会被保存在 `pointerEvent` 中，然后被传递给业务层中设置的输入事件句柄。",
          "```csharp\n    protected void ProcessMousePress(MouseButtonEventData data)\n        {\n            var pointerEvent = data.buttonData;\n            var currentOverGo = pointerEvent.pointerCurrentRaycast.gameObject;",
          "// 如果当前按下是当前帧时\n            if (data.PressedThisFrame())\n            {\n                pointerEvent.eligibleForClick = true;\n                pointerEvent.delta = Vector2.zero;\n                pointerEvent.dragging = false;\n                pointerEvent.useDragThreshold = true;\n                pointerEvent.pressPosition = pointerEvent.position;\n                pointerEvent.pointerPressRaycast = pointerEvent.pointerCurrentRaycast;",
          "DeselectIfSelectionChanged(currentOverGo, pointerEvent);",
          "var resetDiffTime = Time.unscaledTime - pointerEvent.clickTime;\n                if (resetDiffTime >= doubleClickTime)\n                {\n                    pointerEvent.clickCount = 0;\n                }",
          "// 搜索将接收按压的控件\n        //如果找不到按压处理程序，则将按压处理程序设置为会接收点击的控件。\n                var newPressed = ExecuteEvents.ExecuteHierarchy(currentOverGo, pointerEvent, ExecuteEvents.pointerDownHandler);\n                // 判断当前gameobject是否有IPointerClickHandler接口\n                var newClick = ExecuteEvents.GetEventHandler<IPointerClickHandler>(currentOverGo);",
          "if (newPressed == null)\n                    newPressed = newClick;",
          "float time = Time.unscaledTime;",
          "// 计算连击次数 \n                if (newPressed == pointerEvent.lastPress)\n                {\n                    var diffTime = time - pointerEvent.clickTime;\n                    if (diffTime < doubleClickTime) // doubleClickTime: 0.3f\n                        ++pointerEvent.clickCount;\n                    else\n                        pointerEvent.clickCount = 1;",
          "pointerEvent.clickTime = time;\n                }\n                else\n                {\n                    pointerEvent.clickCount = 1;\n                }\n        // pointerEvent赋值\n                pointerEvent.pointerPress = newPressed;\n                pointerEvent.rawPointerPress = currentOverGo;\n                pointerEvent.pointerClick = newClick;",
          "pointerEvent.clickTime = time;",
          "// 获取IDragHandler接口\n                pointerEvent.pointerDrag = ExecuteEvents.GetEventHandler<IDragHandler>(currentOverGo);",
          "// 执行拖拽启动事件\n                if (pointerEvent.pointerDrag != null)\n                    ExecuteEvents.Execute(pointerEvent.pointerDrag, pointerEvent, ExecuteEvents.initializePotentialDrag);",
          "m_InputPointerEvent = pointerEvent;\n            }",
          "// 抬起鼠标通知\n            if (data.ReleasedThisFrame())\n            {\n                ReleaseMouse(pointerEvent, currentOverGo);\n            }\n        }\n```",
          "`ProcessDrag`（PointerInputModule）拖拽句柄处理函数，拖拽开始事件处理，判断结束拖拽事件，以及拖拽句柄调用。",
          "```csharp\n protected virtual void ProcessDrag(PointerEventData pointerEvent)\n        {\n            if (!pointerEvent.IsPointerMoving() ||\n                Cursor.lockState == CursorLockMode.Locked ||\n                pointerEvent.pointerDrag == null)\n                return;",
          "// 开始拖拽句柄\n            if (!pointerEvent.dragging\n                && ShouldStartDrag(pointerEvent.pressPosition, pointerEvent.position, eventSystem.pixelDragThreshold, pointerEvent.useDragThreshold))\n            {\n                ExecuteEvents.Execute(pointerEvent.pointerDrag, pointerEvent, ExecuteEvents.beginDragHandler);\n                pointerEvent.dragging = true;\n            }",
          "// 拖拽通知\n            if (pointerEvent.dragging)\n            {\n                // 如果按下的物体和拖拽的物体不是同一个则视为抬起拖拽，并清除前面按下时的标记\n                if (pointerEvent.pointerPress != pointerEvent.pointerDrag)\n                {\n                    ExecuteEvents.Execute(pointerEvent.pointerPress, pointerEvent, ExecuteEvents.pointerUpHandler);",
          "pointerEvent.eligibleForClick = false;\n                    pointerEvent.pointerPress = null;\n                    pointerEvent.rawPointerPress = null;\n                }",
          "// 执行拖拽中句柄\n                ExecuteEvents.Execute(pointerEvent.pointerDrag, pointerEvent, ExecuteEvents.dragHandler);\n            }\n        }\n```",
          "`ProcessMove` 则相对简单点，每帧都会直接调用处理句柄(`IPointerMoveHandler`)。",
          "```csharp\nprotected virtual void ProcessMove(PointerEventData pointerEvent)\n{\n    var targetGO = pointerEvent.pointerCurrentRaycast.gameObject;\n    HandlePointerExitAndEnter(pointerEvent, targetGO);\n}\n```"
        ]
      },
      {
        "heading": "2.2 ProcessTouchEvents函数",
        "paragraphs": [
          "`TouchInputModule`触屏模块的主要函数`ProcessTouchEvents`",
          "```csharp\n    // 处理所有触屏事件\n    private bool ProcessTouchEvents()\n        {\n            for (int i = 0; i < input.touchCount; ++i)\n            {\n                Touch touch = input.GetTouch(i);",
          "if (touch.type == TouchType.Indirect)\n                    continue;",
          "bool released;\n                bool pressed;\n                var pointer = GetTouchPointerEventData(touch, out pressed, out released);",
          "ProcessTouchPress(pointer, pressed, released);",
          "if (!released)\n                {\n                    ProcessMove(pointer);\n                    ProcessDrag(pointer);\n                }\n                else\n                    RemovePointerData(pointer);\n            }\n            return input.touchCount > 0;\n        }\n```"
        ]
      },
      {
        "heading": "2.3 ExecuteEvents类",
        "paragraphs": [
          "`ExecuteEvents`类主要是用来获得对应的句柄，然后执行对应的接口。主要依靠 `ExecuteEvents.ExecuteHierarchy，ExecuteEvents.Execute`,其会获得该物体所有父物体(包括自己),然后依次获得对应`IHandler`,执行句柄。",
          "```csharp\n        public static GameObject ExecuteHierarchy<T>(GameObject root, BaseEventData eventData, EventFunction<T> callbackFunction) where T : IEventSystemHandler\n        {\n            // 获得父物体（包括自己）\n            GetEventChain(root, s_InternalTransformList);",
          "var internalTransformListCount = s_InternalTransformList.Count;\n            for (var i = 0; i < internalTransformListCount; i++)\n            {\n                var transform = s_InternalTransformList[i];\n                if (Execute(transform.gameObject, eventData, callbackFunction))\n                    return transform.gameObject;\n            }\n            return null;\n        }",
          "public static bool Execute<T>(GameObject target, BaseEventData eventData, EventFunction<T> functor) where T : IEventSystemHandler\n        {\n            var internalHandlers = ListPool<IEventSystemHandler>.Get();\n            GetEventList<T>(target, internalHandlers);",
          "var internalHandlersCount = internalHandlers.Count;\n            for (var i = 0; i < internalHandlersCount; i++)\n            {\n                T arg;\n                try\n                {\n                    arg = (T)internalHandlers[i];\n                }\n                catch (Exception e)\n                {\n                    var temp = internalHandlers[i];\n                    Debug.LogException(new Exception(string.Format(\"Type {0} expected {1} received.\", typeof(T).Name, temp.GetType().Name), e));\n                    continue;\n                }",
          "try\n                {\n                    functor(arg, eventData);\n                }\n                catch (Exception e)\n                {\n                    Debug.LogException(e);\n                }\n            }",
          "var handlerCount = internalHandlers.Count;\n            ListPool<IEventSystemHandler>.Release(internalHandlers);\n            return handlerCount > 0;\n        }\n```"
        ]
      },
      {
        "heading": "三、射线碰撞检测模块",
        "paragraphs": [
          "射线碰撞检测模块主要工作是从摄像机的屏幕位置上，做射线碰撞检测并获取碰撞结果，把结果返回给事件逻辑处理类，由事件处理模块处理事件。",
          "射线碰撞检测模块主要为3个类，分别作用于`2D`射线碰撞检测，`3D`射线碰撞检测，`GraphicRaycaster`图形射线碰撞检测。",
          "`2D`和`3D`射线碰撞检测主要为`Physics2DRaycaster`和`PhysicsRaycaster`,用射线的形式进行碰撞检测，区别在`2D`碰撞结果里预留了`2D`的层级次序以便在后面的碰撞结果排序时，以这个层级次序为依据做排序，而`3D`的碰撞检测结果则是以距离大小为依据排序的。",
          "`GraphicRaycaster`是 为UGUI元素点位检测的类，放在**Core渲染模块中**，主要针对`ScreenSpaceOverlay`模式下输入点位（位置进行判断）做碰撞检测，不依赖于射线碰撞。而是遍历所有可点击的UGUI元素来检测比较。",
          "`GraphicRaycaster`对每个可以点击的元素(`raycasterTarget`是否为true, 并且depth不为-1，为可点击元素)进行计算，判断点位是否落在该元素上，再通过depth变量排序，判断最先落在那个元素上。",
          "```csharp\npublic override void Raycast(PointerEventData eventData, List<RaycastResult> resultAppendList)\n        {\n            if (canvas == null)\n                return;",
          "// 获得canvas下注册过raycaster事件的Graphic\n            var canvasGraphics = GraphicRegistry.GetRaycastableGraphicsForCanvas(canvas);\n            if (canvasGraphics == null || canvasGraphics.Count == 0)\n                return;",
          "int displayIndex;\n            var currentEventCamera = eventCamera;",
          "if (canvas.renderMode == RenderMode.ScreenSpaceOverlay || currentEventCamera == null)\n                displayIndex = canvas.targetDisplay;\n            else\n                displayIndex = currentEventCamera.targetDisplay;",
          "// 进行多平台检测\n            Vector3 eventPosition = MultipleDisplayUtilities.RelativeMouseAtScaled(eventData.position);\n            if (eventPosition == Vector3.zero)\n            {\n                eventPosition = eventData.position;\n#if UNITY_EDITOR\n                eventPosition.z = Display.activeEditorGameViewTarget;\n#endif\n#if ENABLE_INPUT_SYSTEM && PACKAGE_INPUTSYSTEM\n                eventPosition.z = eventData.displayIndex;\n#endif\n                if ((int) eventPosition.z != displayIndex)\n                    return;",
          "// Convert to view space\n            Vector2 pos;\n            if (currentEventCamera == null)\n            {",
          "float w = Screen.width;\n                float h = Screen.height;\n                if (displayIndex > 0 && displayIndex < Display.displays.Length)\n                {\n                    w = Display.displays[displayIndex].systemWidth;\n                    h = Display.displays[displayIndex].systemHeight;\n                }\n                pos = new Vector2(eventPosition.x / w, eventPosition.y / h);\n            }\n            else\n                pos = currentEventCamera.ScreenToViewportPoint(eventPosition);",
          "// If it's outside the camera's viewport, do nothing\n            if (pos.x < 0f || pos.x > 1f || pos.y < 0f || pos.y > 1f)\n                return;",
          "float hitDistance = float.MaxValue;",
          "Ray ray = new Ray();",
          "if (currentEventCamera != null)\n                ray = currentEventCamera.ScreenPointToRay(eventPosition);",
          "if (canvas.renderMode != RenderMode.ScreenSpaceOverlay && blockingObjects != BlockingObjects.None)\n            {\n                float distanceToClipPlane = 100.0f;",
          "if (currentEventCamera != null)\n                {\n                    float projectionDirection = ray.direction.z;\n                    distanceToClipPlane = Mathf.Approximately(0.0f, projectionDirection)\n                        ? Mathf.Infinity\n                        : Mathf.Abs((currentEventCamera.farClipPlane - currentEventCamera.nearClipPlane) / projectionDirection);\n                }\n#if PACKAGE_PHYSICS\n                if (blockingObjects == BlockingObjects.ThreeD || blockingObjects == BlockingObjects.All)\n                {\n                    if (ReflectionMethodsCache.Singleton.raycast3D != null)\n                    {\n                        var hits = ReflectionMethodsCache.Singleton.raycast3DAll(ray, distanceToClipPlane, (int)m_BlockingMask);\n                        if (hits.Length > 0)\n                            hitDistance = hits[0].distance;\n                    }\n                }\n#endif\n#if PACKAGE_PHYSICS2D\n                if (blockingObjects == BlockingObjects.TwoD || blockingObjects == BlockingObjects.All)\n                {\n                    if (ReflectionMethodsCache.Singleton.raycast2D != null)\n                    {\n                        var hits = ReflectionMethodsCache.Singleton.getRayIntersectionAll(ray, distanceToClipPlane, (int)m_BlockingMask);\n                        if (hits.Length > 0)\n                            hitDistance = hits[0].distance;\n                    }\n                }\n#endif\n            }",
          "m_RaycastResults.Clear();",
          "Raycast(canvas, currentEventCamera, eventPosition, canvasGraphics, m_RaycastResults);",
          "int totalCount = m_RaycastResults.Count;\n            for (var index = 0; index < totalCount; index++)\n            {\n                var go = m_RaycastResults[index].gameObject;\n                bool appendGraphic = true;",
          "if (ignoreReversedGraphics)\n                {\n                    if (currentEventCamera == null)\n                    {\n                        var dir = go.transform.rotation * Vector3.forward;\n                        appendGraphic = Vector3.Dot(Vector3.forward, dir) > 0;\n                    }\n                    else\n                    {\n                        var cameraForward = currentEventCamera.transform.rotation * Vector3.forward * currentEventCamera.nearClipPlane;\n                        appendGraphic = Vector3.Dot(go.transform.position - currentEventCamera.transform.position - cameraForward, go.transform.forward) >= 0;\n                    }\n                }",
          "if (appendGraphic)\n                {\n                    float distance = 0;\n                    Transform trans = go.transform;\n                    Vector3 transForward = trans.forward;",
          "if (currentEventCamera == null || canvas.renderMode == RenderMode.ScreenSpaceOverlay)\n                        distance = 0;\n                    else\n                    {\n                        // http://geomalgorithms.com/a06-_intersect-2.html\n                        distance = (Vector3.Dot(transForward, trans.position - ray.origin) / Vector3.Dot(transForward, ray.direction));",
          "// Check to see if the go is behind the camera.\n                        if (distance < 0)\n                            continue;\n                    }",
          "if (distance >= hitDistance)\n                        continue;",
          "var castResult = new RaycastResult\n                    {\n                        gameObject = go,\n                        module = this,\n                        distance = distance,\n                        screenPosition = eventPosition,\n                        displayIndex = displayIndex,\n                        index = resultAppendList.Count,\n                        depth = m_RaycastResults[index].depth,\n                        sortingLayer = canvas.sortingLayerID,\n                        sortingOrder = canvas.sortingOrder,\n                        worldPosition = ray.origin + ray.direction * distance,\n                        worldNormal = -transForward\n                    };\n                    resultAppendList.Add(castResult);\n                }\n            }\n        }\n```"
        ]
      },
      {
        "heading": "四、事件逻辑处理模块",
        "paragraphs": [
          "事件逻辑处理模块主要在**EventSystem**类中，其余的类都是对他起辅助作用。",
          "`EventInterfaces`，`EventTrigger`，`EventTriggerType` 定义了事件回调函数，`ExecuteEvents` 编写了所有执行事件的回调接口。",
          "**EventSystem** 主逻辑里基本上都在处理由射线碰撞检测后引起的各类事件。判断事件是否成立，成立则发起事件回调，不成立则继续轮询检查，等待事件的发生。",
          "**EventSystem** 是事件处理模块中唯一继承 `MonoBehavior` 并且有在 Update 帧循环中做轮询的。也就是说，所有`UI`事件的发生都是通过 **EventSystem** 轮询监测到的并且实施的。EventSystem 通过调用输入事件检测模块，检测碰撞模块，来形成自己主逻辑部分。因此可以说 **EventSystem** 是主逻辑类，是整个事件模块的入口。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-49",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "UGUI核心源码剖析",
    "date": "2025-11-12",
    "cover": "🎮",
    "excerpt": "前言 Core模块主要为Culling（裁剪）、Layout（布局）、MaterialModifiers（材质球修改器）、SpecializedCollection（收集），Utility(实用工具)、vc（顶点修改器）。 一、Cullin...",
    "sections": [
      {
        "heading": "前言",
        "paragraphs": [
          "![](@img/ymwb72nb)",
          "`Core`模块主要为Culling（裁剪）、Layout（布局）、MaterialModifiers（材质球修改器）、SpecializedCollection（收集），Utility(实用工具)、vc（顶点修改器）。"
        ]
      },
      {
        "heading": "一、Culling裁剪模块",
        "paragraphs": [
          "![](@img/1j84gz1b)",
          "**Culling**是对模型裁剪的工具类，大都用到Mask遮罩上，只要Mask才有裁剪的需求。Cliping类FindCullAndClipWorldRect就是将很多 RectMask2D 重叠部分，计算出它们的重叠部分的区域。",
          "```csharp\n        public static Rect FindCullAndClipWorldRect(List<RectMask2D> rectMaskParents, out bool validRect)\n        {\n            if (rectMaskParents.Count == 0)\n            {\n                validRect = false;\n                return new Rect();\n            }",
          "Rect current = rectMaskParents[0].canvasRect;\n            Vector4 offset = rectMaskParents[0].padding;\n            float xMin = current.xMin + offset.x;\n            float xMax = current.xMax - offset.z;\n            float yMin = current.yMin + offset.y;\n            float yMax = current.yMax - offset.w;",
          "var rectMaskParentsCount = rectMaskParents.Count;\n            for (var i = 1; i < rectMaskParentsCount; ++i)\n            {\n                current = rectMaskParents[i].canvasRect;\n                offset = rectMaskParents[i].padding;\n                if (xMin < current.xMin + offset.x)\n                    xMin = current.xMin + offset.x;\n                if (yMin < current.yMin + offset.y)\n                    yMin = current.yMin + offset.y;\n                if (xMax > current.xMax - offset.z)\n                    xMax = current.xMax - offset.z;\n                if (yMax > current.yMax - offset.w)\n                    yMax = current.yMax - offset.w;\n            }",
          "validRect = xMax > xMin && yMax > yMin;\n            return validRect ? new Rect(xMin, yMin, xMax - xMin, yMax - yMin) : new Rect();\n        }\n```"
        ]
      },
      {
        "heading": "二、Layout布局模块",
        "paragraphs": [
          "![](@img/4num4how)",
          "Layout主要功能是布局方面的，包括横向布局，纵向布局，方格布局等。",
          "除了布局内容之外，其余还有3个文件，`CanvasScaler`，`AspectRatioFitter`，`ContentSizeFitter`是调整自适应功能。",
          "`ContentSizeFitter`处理的是内容自适应，AspectRatioFitter是朝向自适应，其中包括以长度为基准，以宽度为基准，以父节点为基准，以外层父节点为基准的四种自适应方式。",
          "CanvasScaler操作的是Canvas整个画布针对不同的屏幕进行自适应调整。一共有三种ScreenMathMode模式，不同模式对应屏幕不同的适应算法。包括`优先匹配长或宽`，`最小化固定拉伸`，`最大化固定拉伸`",
          "```csharp\n        // 处理不同的ScaleMode\n        protected virtual void Handle()\n        {\n            if (m_Canvas == null || !m_Canvas.isRootCanvas)\n                return;",
          "if (m_Canvas.renderMode == RenderMode.WorldSpace)\n            {\n                HandleWorldCanvas();\n                return;\n            }",
          "switch (m_UiScaleMode)\n            {\n                case ScaleMode.ConstantPixelSize: HandleConstantPixelSize(); break;\n                case ScaleMode.ScaleWithScreenSize: HandleScaleWithScreenSize(); break;\n                case ScaleMode.ConstantPhysicalSize: HandleConstantPhysicalSize(); break;\n            }\n        }",
          "// 处理缩放根据ScreenSize\n        protected virtual void HandleScaleWithScreenSize()\n        {\n            Vector2 screenSize = m_Canvas.renderingDisplaySize;",
          "// Multiple display support only when not the main display. For display 0 the reported\n            // resolution is always the desktops resolution since its part of the display API,\n            // so we use the standard none multiple display method. (case 741751)\n            int displayIndex = m_Canvas.targetDisplay;\n            if (displayIndex > 0 && displayIndex < Display.displays.Length)\n            {\n                Display disp = Display.displays[displayIndex];\n                screenSize = new Vector2(disp.renderingWidth, disp.renderingHeight);\n            }",
          "float scaleFactor = 0;\n            switch (m_ScreenMatchMode)\n            {\n                case ScreenMatchMode.MatchWidthOrHeight:\n                {\n                    // We take the log of the relative width and height before taking the average.\n                    // Then we transform it back in the original space.\n                    // the reason to transform in and out of logarithmic space is to have better behavior.\n                    // If one axis has twice resolution and the other has half, it should even out if widthOrHeight value is at 0.5.\n                    // In normal space the average would be (0.5 + 2) / 2 = 1.25\n                    // In logarithmic space the average is (-1 + 1) / 2 = 0\n                    float logWidth = Mathf.Log(screenSize.x / m_ReferenceResolution.x, kLogBase);\n                    float logHeight = Mathf.Log(screenSize.y / m_ReferenceResolution.y, kLogBase);\n                    float logWeightedAverage = Mathf.Lerp(logWidth, logHeight, m_MatchWidthOrHeight);\n                    scaleFactor = Mathf.Pow(kLogBase, logWeightedAverage);\n                    break;\n                }\n                case ScreenMatchMode.Expand:\n                {\n                    scaleFactor = Mathf.Min(screenSize.x / m_ReferenceResolution.x, screenSize.y / m_ReferenceResolution.y);\n                    break;\n                }\n                case ScreenMatchMode.Shrink:\n                {\n                    scaleFactor = Mathf.Max(screenSize.x / m_ReferenceResolution.x, screenSize.y / m_ReferenceResolution.y);\n                    break;\n                }\n            }",
          "SetScaleFactor(scaleFactor);\n            SetReferencePixelsPerUnit(m_ReferencePixelsPerUnit);\n        }\n```"
        ]
      },
      {
        "heading": "三、VertexModifiers顶点修改器类",
        "paragraphs": [
          "![](@img/amvabqf9)",
          "`VertexModifiers`主要用于修改图形网格，尤其是在UI元素网格生成完毕后进行二次修改。",
          "其中BaseMeshEffect是抽象基类， 提供所有在修改UI元素网格时所需要的变量和接口。",
          "`IMeshModifier`是关键接口，**渲染核心类Graphic**中会获取所有拥有这个接口的组件，然后依次遍历并调用**ModifyMesh**接口来触发改变图像网格的效果。",
          "Outline(包边框)，Shadow(阴影)，PositionAsUV1(位置UV) 都继承了 BaseMeshEffect 基类，并实现了关键接口 ModifyMesh。其中 Outline 继承自 Shadow。",
          "**核心代码：**在原有的Mesh顶点基础上，加入新的顶点，这些新的顶点复制了原来的顶点数据，修改颜色并向外扩充，使得原图形外渲染出外描边或者阴影",
          "```csharp\n        protected void ApplyShadowZeroAlloc(List<UIVertex> verts, Color32 color, int start, int end, float x, float y)\n        {\n            UIVertex vt;",
          "var neededCapacity = verts.Count + end - start;\n            if (verts.Capacity < neededCapacity)\n                verts.Capacity = neededCapacity;",
          "for (int i = start; i < end; ++i)\n            {\n                vt = verts[i];\n                verts.Add(vt);",
          "Vector3 v = vt.position;\n                v.x += x;\n                v.y += y;\n                vt.position = v;\n                var newColor = color;\n                if (m_UseGraphicAlpha)\n                    newColor.a = (byte)((newColor.a * verts[i].color.a) / 255);\n                vt.color = newColor;\n                verts[i] = vt;\n            }\n        }\n```"
        ]
      },
      {
        "heading": "四、工具类",
        "paragraphs": [
          "![](@img/dmb43tqw)",
          "`MaterialModifiers`(材质球修改器), `SpecializedCollections`（特殊收集器）, `Utility`（使用工具）是其他模块所依赖的工具。",
          "`IMaterialModifier` 是一个接口类，为`Mask` 遮罩修改材质球所准备的，但所用方法都需要各自实现",
          "`IndexedSet` 是一个容器，在很多核心代码上都有使用，它加速了移除元素的速度，以及加速了元素包含判断。",
          "`ListPool`是`List`容器对象池，`ObjectPool`是普通对象池，很多代码上都用到了它们，对象池让内存利用率更高。",
          "`VertexHelper` 特别重要，它是用来存储生成 `Mesh` 网格需要的所有数据，由于在`Mesh`生成的过程中顶点的生成频率非常高，因此 `VertexHelper` 存储了 `Mesh` 的所有相关数据的同时，用上面提到的`ListPool`和`ObjectPool`做为对象池来生成和销毁，使得数据高效得被重复利用，不过它并不负责计算和生成 Mesh，计算和生成由各自图形组件来完成，它只为它们提供计算后的数据存储服务。"
        ]
      },
      {
        "heading": "五、核心渲染类",
        "paragraphs": [
          "我们常用的`Image、RawImage、Mask、RectMask2D、Text、InputField`中，Image，RawImage，Text都是继承了MaskableGraphic，而`MaskableGraphic`又继承自`Graphic`类。除了这几个类外， CanvasUpdateRegistry是存储和管理所有课绘制元素大的管理类。其中**Graphic类**非常重要，是基础类也存在核心算法。"
        ]
      },
      {
        "heading": "5.1 Graphic.SetAllDirty()",
        "paragraphs": [
          "-   **SetLayoutDirty：** 设置布局脏数据\n-   **SetMaterialDirty：** 设置材质球脏数据\n-   **SetVerticesDirty：**设置顶点脏数据\n-   **SetRaycastDirty：**设置射线脏数据",
          "`SetLayoutDirty`、`SetMaterialDirty`、`SetVerticesDirty`都调用了**CanvasUpdateRegistry.RegisterCanvasElementForGraphicRebuild**，它被调用时可以认为是通知它去重新重构Mesh，但它并没有立即重新构建，而是将需要重构的元件数据加入到**IndexedSet**容器中，等待下次重构。",
          "```csharp\n        public virtual void SetAllDirty()\n        {\n            if (m_SkipLayoutUpdate)\n            {\n                m_SkipLayoutUpdate = false;\n            }\n            else\n            {\n                SetLayoutDirty();\n            }",
          "if (m_SkipMaterialUpdate)\n            {\n                m_SkipMaterialUpdate = false;\n            }\n            else\n            {\n                SetMaterialDirty();\n            }",
          "SetVerticesDirty();\n            SetRaycastDirty();\n        }",
          "// 设置布局脏数据\n        public virtual void SetLayoutDirty()\n        {\n            if (!IsActive())\n                return;",
          "LayoutRebuilder.MarkLayoutForRebuild(rectTransform);",
          "if (m_OnDirtyLayoutCallback != null)\n                m_OnDirtyLayoutCallback();\n        }",
          "// 设置材质球脏数据\n        public virtual void SetMaterialDirty()\n        {\n            if (!IsActive())\n                return;",
          "m_MaterialDirty = true;\n            CanvasUpdateRegistry.RegisterCanvasElementForGraphicRebuild(this);",
          "if (m_OnDirtyMaterialCallback != null)\n                m_OnDirtyMaterialCallback();\n        }",
          "// 设置顶点脏数据 \n    public virtual void SetVerticesDirty()\n        {\n            if (!IsActive())\n                return;",
          "m_VertsDirty = true;\n            CanvasUpdateRegistry.RegisterCanvasElementForGraphicRebuild(this);",
          "if (m_OnDirtyVertsCallback != null)\n                m_OnDirtyVertsCallback();\n        }",
          "// 设置raycast响应事件脏数据\n        public void SetRaycastDirty()\n        {\n            if (m_RaycastTargetCache != m_RaycastTarget)\n            {\n                if (m_RaycastTarget && isActiveAndEnabled)\n                    GraphicRegistry.RegisterRaycastGraphicForCanvas(canvas, this);",
          "else if (!m_RaycastTarget)\n                    GraphicRegistry.UnregisterRaycastGraphicForCanvas(canvas, this);\n            }\n            m_RaycastTargetCache = m_RaycastTarget;\n        }\n```"
        ]
      },
      {
        "heading": "5.2 CanvasUpdateRegistry() 重构Mesh",
        "paragraphs": [
          "**CanvasUpdateRegistry：**负责重构Mesh网格。",
          "```csharp\n        // IndexedSet:重构数据\n    private readonly IndexedSet<ICanvasElement> m_GraphicRebuildQueue = new IndexedSet<ICanvasElement>();",
          "public static void RegisterCanvasElementForGraphicRebuild(ICanvasElement element)\n        {\n            instance.InternalRegisterCanvasElementForGraphicRebuild(element);\n        }",
          "public static bool TryRegisterCanvasElementForGraphicRebuild(ICanvasElement element)\n        {\n            return instance.InternalRegisterCanvasElementForGraphicRebuild(element);\n        }",
          "private bool InternalRegisterCanvasElementForGraphicRebuild(ICanvasElement element)\n        {\n            if (m_PerformingGraphicUpdate)\n            {\n                Debug.LogError(string.Format(\"Trying to add {0} for graphic rebuild while we are already inside a graphic rebuild loop. This is not supported.\", element));\n                return false;\n            }",
          "return m_GraphicRebuildQueue.AddUnique(element);\n        }\n```"
        ]
      },
      {
        "heading": "5.3 Graphic.PerformUpdate()",
        "paragraphs": [
          "重构调用中的逻辑，先将需要重新布局的元素取出来一个个调用Rebuild函数，在对布局的元素进行裁剪，裁剪后对布局中每个需要重构的元素取出来调用Rebuild函数进行重构。",
          "```csharp\n        private static readonly Comparison<ICanvasElement> s_SortLayoutFunction = SortLayoutList;\n        private void PerformUpdate()\n        {\n            UISystemProfilerApi.BeginSample(UISystemProfilerApi.SampleType.Layout);\n            CleanInvalidItems();",
          "m_PerformingLayoutUpdate = true;",
          "m_LayoutRebuildQueue.Sort(s_SortLayoutFunction);\n       // 布局重构\n            for (int i = 0; i <= (int)CanvasUpdate.PostLayout; i++)\n            {\n                UnityEngine.Profiling.Profiler.BeginSample(m_CanvasUpdateProfilerStrings[i]);",
          "for (int j = 0; j < m_LayoutRebuildQueue.Count; j++)\n                {\n                    var rebuild = m_LayoutRebuildQueue[j];\n                    try\n                    {\n                        if (ObjectValidForUpdate(rebuild))\n                            rebuild.Rebuild((CanvasUpdate)i);\n                    }\n                    catch (Exception e)\n                    {\n                        Debug.LogException(e, rebuild.transform);\n                    }\n                }\n                UnityEngine.Profiling.Profiler.EndSample();\n            }",
          "for (int i = 0; i < m_LayoutRebuildQueue.Count; ++i)\n                m_LayoutRebuildQueue[i].LayoutComplete();",
          "m_LayoutRebuildQueue.Clear();\n            m_PerformingLayoutUpdate = false;\n            UISystemProfilerApi.EndSample(UISystemProfilerApi.SampleType.Layout);\n            UISystemProfilerApi.BeginSample(UISystemProfilerApi.SampleType.Render);\n        // 裁剪\n            // now layout is complete do culling...\n            UnityEngine.Profiling.Profiler.BeginSample(m_CullingUpdateProfilerString);\n            ClipperRegistry.instance.Cull();\n            UnityEngine.Profiling.Profiler.EndSample();",
          "// 元素重构\n            m_PerformingGraphicUpdate = true;\n            for (var i = (int)CanvasUpdate.PreRender; i < (int)CanvasUpdate.MaxUpdateValue; i++)\n            {\n                UnityEngine.Profiling.Profiler.BeginSample(m_CanvasUpdateProfilerStrings[i]);\n                for (var k = 0; k < m_GraphicRebuildQueue.Count; k++)\n                {\n                    try\n                    {\n                        var element = m_GraphicRebuildQueue[k];\n                        if (ObjectValidForUpdate(element))\n                            element.Rebuild((CanvasUpdate)i);\n                    }\n                    catch (Exception e)\n                    {\n                        Debug.LogException(e, m_GraphicRebuildQueue[k].transform);\n                    }\n                }\n                UnityEngine.Profiling.Profiler.EndSample();\n            }",
          "for (int i = 0; i < m_GraphicRebuildQueue.Count; ++i)\n                m_GraphicRebuildQueue[i].GraphicUpdateComplete();",
          "m_GraphicRebuildQueue.Clear();\n            m_PerformingGraphicUpdate = false;\n            UISystemProfilerApi.EndSample(UISystemProfilerApi.SampleType.Render);\n        }\n```"
        ]
      },
      {
        "heading": "5.4 Graphic.DoMeshGeneration()",
        "paragraphs": [
          "`DoMeshGeneration`是元素重构`Rebuild`会调用到的，先调用`OnPopulateMesh(pɒpjuleɪt发音：pɒpjuleɪt)`创建自己的Mesh网格，然后调用所有需要修改 Mesh 的修改者(IMeshModifier)也就是网格后处理组件(描边等效果组件)进行修改，最后放入 `CanvasRenderer`。",
          "其中 `CanvasRenderer` 是每个绘制元素都必须有的组件，它是画布与渲染的连接组件，通过 `CanvasRenderer` 我们才能把网格绘制到 Canvas 画布上去。",
          "Imge，RawImag，Text都override重写`OnpopulateMesh`函数。",
          "```csharp\nprotected override void OnPopulateMesh(VertexHelper toFill)",
          "private void DoMeshGeneration()\n{\n    if (rectTransform != null && rectTransform.rect.width >= 0 && rectTransform.rect.height >= 0)\n        OnPopulateMesh(s_VertexHelper);\n    else\n        s_VertexHelper.Clear(); // clear the vertex helper so invalid graphics dont draw.",
          "var components = ListPool<Component>.Get();\n    GetComponents(typeof(IMeshModifier), components);",
          "for (var i = 0; i < components.Count; i++)\n        ((IMeshModifier)components[i]).ModifyMesh(s_VertexHelper);",
          "ListPool<Component>.Release(components);",
          "s_VertexHelper.FillMesh(workerMesh);\n    canvasRenderer.SetMesh(workerMesh);\n}\n```"
        ]
      },
      {
        "heading": "6.1 Mask",
        "paragraphs": [
          "Mask 组件调用了模板材质球构建了一个自己的材质球，使用了实时渲染中的模板方法来裁切不需要显示的部分，在 Mask 组件后面的物体都会进行裁切。Mask 是在 GPU 中做的裁切，使用的方法是着色器中的模板方法。",
          "```csharp\nvar maskMaterial = StencilMaterial.Add(baseMaterial, 1, StencilOp.Replace, CompareFunction.Always, m_ShowMaskGraphic ? ColorWriteMask.All : 0);\nStencilMaterial.Remove(m_MaskMaterial);\nm_MaskMaterial = maskMaterial;",
          "var unmaskMaterial = StencilMaterial.Add(baseMaterial, 1, StencilOp.Zero, CompareFunction.Always, 0);\nStencilMaterial.Remove(m_UnmaskMaterial);\nm_UnmaskMaterial = unmaskMaterial;\ngraphic.canvasRenderer.popMaterialCount = 1;\ngraphic.canvasRenderer.SetPopMaterial(m_UnmaskMaterial, 0);",
          "return m_MaskMaterial;\n```"
        ]
      },
      {
        "heading": "6.2 RectMask2D",
        "paragraphs": [
          "RectMask2D 会先计算并设置裁切的范围，再对所有子节点调用裁切操作。",
          "```csharp\npublic virtual void PerformClipping()\n{\n    if (m_ShouldRecalculateClipRects)\n    {\n        // 获取了所有有关联的 RectMask2D 遮罩\n        MaskUtilities.GetRectMasksForClip(this, m_Clippers);\n        m_ShouldRecalculateClipRects = false;\n    }",
          "bool validRect = true;\n    // 获取了所有有关联的 RectMask2D 遮罩范围\n    Rect clipRect = Clipping.FindCullAndClipWorldRect(m_Clippers, out validRect);\n    if (clipRect != m_LastClipRectCanvasSpace)\n    {\n        // 计算了不需要裁切的部分，其他部分都进行裁切\n        for (int i = 0; i < m_ClipTargets.Count; ++i)\n            m_ClipTargets[i].SetClipRect(clipRect, validRect);",
          "m_LastClipRectCanvasSpace = clipRect;\n        m_LastClipRectValid = validRect;\n    }",
          "for (int i = 0; i < m_ClipTargets.Count; ++i)\n        m_ClipTargets[i].Cull(m_LastClipRectCanvasSpace, m_LastClipRectValid);\n}",
          "// 裁切源码\npublic virtual void SetClipRect(Rect clipRect, bool validRect)\n{\n    if (validRect)\n        canvasRenderer.EnableRectClipping(clipRect);\n    else\n        canvasRenderer.DisableRectClipping();\n}\n```"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-50",
    "tags": [
      "Linux"
    ],
    "categoryId": "linux",
    "title": "Docker教程",
    "date": "2025-11-13",
    "cover": "🐧",
    "excerpt": "一、安装Docker 先登录到新服务器, 在创建服务器用户，并赋予权限 # ssh连接 xxx.xxx.xxx.xxx替换成新服务器的公网IP ssh root@xxx.xxx.xxx.xxx # 创建用户 adduser username...",
    "sections": [
      {
        "heading": "一、安装Docker",
        "paragraphs": [
          "1.  先登录到新服务器, 在创建服务器用户，并赋予权限\n    \n    ```shell\n    # ssh连接 xxx.xxx.xxx.xxx替换成新服务器的公网IP\n    ssh root@xxx.xxx.xxx.xxx\n    # 创建用户\n    adduser username\n    usermod -aG sudo username\n    ```\n    \n2.  安装tmux和docker，再根据[docker安装教程](https://docs.docker.com/engine/install/ubuntu/)进行安装\n    \n    ```shell\n    sudo apt-get update\n    sudo apt-get install tmux\n    ```"
        ]
      },
      {
        "heading": "二、Docker常用指令",
        "paragraphs": [
          "将当前用户添加到docker用户组 为了避免每次使用docker命令都需要加上sudo权限，可以将当前用户加入安装中自动创建的docker用户组(可以[参考官方文档](https://docs.docker.com/engine/install/linux-postinstall/))：",
          "```shell\nsudo usermod -aG docker $USER\n```",
          "执行完此操作后，需要退出服务器，再重新登录回来，才可以省去sudo权限。"
        ]
      },
      {
        "heading": "2.1 镜像（images）",
        "paragraphs": [
          "1.  `docker pull ubuntu:20.04`：拉取一个镜像\n2.  `docker images`：列出本地所有镜像\n3.  `docker image rm ubuntu:20.04` 或 `docker rmi ubuntu:20.04`：删除镜像ubuntu:20.04\n4.  `docker [container] commit CONTAINER IMAGE_NAME:TAG`：创建某个container的镜像\n5.  `docker save -o ubuntu_20_04.tar ubuntu:20.04`：将镜像ubuntu:20.04导出到本地文件ubuntu\\_20\\_04.tar中\n6.  `docker load -i ubuntu_20_04.tar`：将镜像ubuntu:20.04从本地文件ubuntu\\_20\\_04.tar中加载出来"
        ]
      },
      {
        "heading": "2.2 容器(container)",
        "paragraphs": [
          "1.  `docker [container] create -it ubuntu:20.04`：利用镜像ubuntu:20.04创建一个容器。\n    \n2.  `docker ps -a`：查看本地的所有容器\n    \n3.  `docker [container] start CONTAINER`：启动容器\n    \n4.  `docker [container] stop CONTAINER`：停止容器\n    \n5.  `docker [container] restart CONTAINER`：重启容器\n    \n6.  `docker [contaienr] run -itd ubuntu:20.04`：创建并启动一个容器\n    \n7.  `docker [container] attach CONTAINER`：进入容器\n    \n    -   先按Ctrl-p，再按Ctrl-q可以挂起容器\n8.  `docker [container] exec CONTAINER COMMAND`：在容器中执行命令\n    \n9.  `docker [container] rm CONTAINER`：删除容器\n    \n10.  `docker container prune`：删除所有已停止的容器\n     \n11.  `docker export -o xxx.tar CONTAINER`：将容器CONTAINER导出到本地文件xxx.tar中\n     \n12.  `docker import xxx.tar image_name:tag`：将本地文件xxx.tar导入成镜像，并将镜像命名为image\\_name:tag\n     \n13.  `docker export/import`与`docker save/load`的区别：\n     \n     -   `export/import`会丢弃历史记录和元数据信息，仅保存容器当时的快照状态\n         \n     -   `save/load`会保存完整记录，体积更大\n         \n14.  `docker top CONTAINER`：查看某个容器内的所有进程\n     \n15.  `docker stats`：查看所有容器的统计信息，包括CPU、内存、存储、网络等信息\n     \n16.  `docker cp xxx CONTAINER:xxx` 或 `docker cp CONTAINER:xxx xxx`：在本地和容器间复制文件\n     \n17.  `docker rename CONTAINER1 CONTAINER2`：重命名容器\n     \n18.  `docker update CONTAINER --memory 500MB`：修改容器限制"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-51",
    "tags": [],
    "categoryId": "tools",
    "title": "Jenkins自动化流程",
    "date": "2025-11-26",
    "cover": "🔧",
    "excerpt": "前言 在公司开发游戏项目时，有配合测试工程师来部署Jenkins打包Unity的Android项目。了解到了Jenkins自动打包的流程，所以写篇博客来记录一下。 一、Jenkins是什么 Jenkins是一个开源软件项目，是基于Java开...",
    "sections": [
      {
        "heading": "前言",
        "paragraphs": [
          "在公司开发游戏项目时，有配合测试工程师来部署Jenkins打包Unity的Android项目。了解到了Jenkins自动打包的流程，所以写篇博客来记录一下。"
        ]
      },
      {
        "heading": "一、Jenkins是什么",
        "paragraphs": [
          "`Jenkins`是一个开源软件项目，是基于`Java`开发的一个持续集成工具**（CI）**，具有友好的操作界面，主要用于持续、自动的构建/测试软件项目、监控外部任务的运行。通常与版本管理工具（SCM）、构建工具结合适用。"
        ]
      },
      {
        "heading": "二、Jenkins的下载与安装",
        "paragraphs": [
          "-   **java环境安装:**\n    \n    由于Jenkins是根据`java`开发的，所有运行jenkins需要java环境(JDK)，安装JDK可看另一个博客:[JDK安装](https://www.lwyzyc.com/?p=380)\n    \n-   **Jenkin下载安装:**\n    \n    进入[Jenkins官网](https://www.jenkins.io/)，点击Download后选择对应的平台和版本进行下载。\n    \n    ![image-20240723161457784](@img/a02elrjr)\n    \n    然后再双击jenkins安装包文件，执行安装。\n    \n    1.  设置安装路径，选择电脑比较大的内存盘:\n    \n    ![image-20240723162417484](@img/jisi0xex)\n    \n    2.  选择`Run service as LocalSystem`使用本地系统账号\n    \n    ![image-20240723162359656](@img/eimj2jfy)\n    \n    3.  选择未被占用的端口\n    \n    ![image-20240723162214021](@img/zs8oo9ot)\n    \n    4.  一直点击下一步，直到安装完成。\n    5.  在浏览器中访问http://localhost:8080(端口号),则会打开如下界面则表示**jenkins安装完成。**\n    \n    ![image-20240723162503608](@img/kppg88mp)\n    \n-   **Jenkins命令行指令:**\n    \n    1.  **net stop jenkins：**关闭jenkins进程\n    2.  **net start jenkins：**开启jenkins进程\n    3.  **jenkins start**：开启jenkins进行(必须进入jenkins的安装路径)\n    4.  **jenkins restart**：重启jenkins进行(必须进入jenkins的安装路径)"
        ]
      },
      {
        "heading": "三、Jenkinsfile语法",
        "paragraphs": [
          "编写`Pipeline Script`:",
          "```java\npipeline {\n    agent any\n    parameters {\n        // 字符串参数\n        string(name: 'WorkPath', defaultValue: 'dev', description: '工作路径') \n        // 下拉选择参数\n        choice(name: 'Channel', choices: ['huawei', 'xiaomi', 'vivo'], description: '渠道包')\n        // 布尔参数\n        booleanParam(name: 'AB', defaultValue: false, description: '是否打包AB')\n        // 文本参数（多行文本）\n        text(name: 'CUSTOM_CONFIG', defaultValue: '', description: '自定义配置')\n    }\n    stages {\n        stage('Build AB') {\n            steps {\n                script {\n                    if (params.AB) {\n                        echo \"开始打ab包\"\n                    }\n                }\n            }\n        }\n        stage('Build') {\n            steps {\n                script {\n                    // 通过 params.参数名 访问参数\n                    echo \"WorkPath：${params.WorkPath}\"\n                    echo \"渠道包：${params.Channel}\"\n                }\n            }\n        }\n    }\n}\n```",
          "-   **pipeline：**表示一个流水线步骤\n    \n-   **agent：**指定了整个流水线或特定的部分, 将会在Jenkins环境中执行的位置，这取决于 `agent` 区域的位置。该部分必须在 `pipeline` 块的顶层被定义。\n    \n    1.  **agent any**：在任何可用的代理上执行流水线或阶段。\n        \n    2.  **agent none**: 当在 `pipeline` 块的顶部没有全局代理， 该参数将会被分配到整个流水线的运行中并且每个 `stage` 部分都需要包含他自己的 `agent` 部分。\n        \n    3.  **agent label**:在提供了标签的 Jenkins 环境中可用的代理上执行流水线或阶段\n        \n-   **stages：**包含一系列一个或多个 stage 指令, `stages` 部分是流水线描述的大部分\"work\" 的位置。 建议 `stages` 至少包含一个 [stage](https://www.jenkins.io/zh/doc/book/pipeline/syntax/#stage) 指令用于连续交付过程的每个离散部分,比如构建, 测试, 和部署。\n    \n-   **steps:**`steps` 部分在给定的 `stage` 指令中执行的定义了一系列的一个或多个steps。\n    \n-   **post:**流水线阶段完成状态后进行。\n    \n    1.  **always**：无论流水线或阶段的完成状态如何。\n        \n    2.  **changed**:只有当前流水线或阶段的完成状态与它之前的运行不同时执行。\n        \n    3.  **failure：**只有当前流水线或阶段的完成状态为失败时执行。\n        \n    4.  **success：**只有当前流水线或阶段的完成状态为成功时执行。\n        \n    5.  **aborted：**只有当前流水线或阶段的完成状态为打断时执行。\n        \n-   **parameters**:供了一个用户在触发流水线时应该提供的参数列表。这些用户指定参数的值可通过 `params` 对象提供给流水线步骤。\n    \n    1.  string类型:字符串类型的参数, 例如: `parameters { string(name: 'DEPLOY_ENV', defaultValue: 'staging', description: '') }`\n    2.  booleanParam类型:布尔参数, 例如: `parameters { booleanParam(name: 'DEBUG_BUILD', defaultValue: true, description: '') }`\n    3.  choice类型:选项参数,例如:parameters { choice(name: 'DEBUG\\_BUILD',choice:\\['ios','android','windows'\\], description: '') }\n-   **options:**\n    \n    1.  **buildDiscarder:**为最近的流水线运行的特定数量保存组件和控制台输出\n    2.  **disableConcurrentBuilds:**不允许同时执行流水线,例如: `options { disableConcurrentBuilds() }`\n    3.  **timeout**:设置流水线运行的超时时间, 在此之后，Jenkins将中止流水线。例如: `options { timeout(time: 1, unit: 'HOURS') }`\n-   **environment**:制定一个 键-值对序列，该序列将被定义为所有步骤的环境变量。"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-52",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "Unity 协程底层原理详解",
    "date": "2025-12-16",
    "cover": "🎮",
    "excerpt": "1. 协程的本质 Unity 协程并非真正的线程，而是基于迭代器的异步编程模式，运行在主线程上。 1.1 核心机制 // 协程方法的实际编译结果 IEnumerator MyCoroutine() { yield return new Wa...",
    "sections": [
      {
        "heading": "1. 协程的本质",
        "paragraphs": [
          "Unity 协程并非真正的线程，而是**基于迭代器的异步编程模式**，运行在主线程上。"
        ]
      },
      {
        "heading": "1.1 核心机制",
        "paragraphs": [
          "```csharp\n// 协程方法的实际编译结果\nIEnumerator MyCoroutine()\n{\n    yield return new WaitForSeconds(1);\n    // 实际被编译器转换为状态机代码\n}\n```"
        ]
      },
      {
        "heading": "2.1 协程调度器",
        "paragraphs": [
          "Unity 通过 `UnityEngine.SetupCoroutine`类管理协程生命周期：",
          "```csharp\n// 简化的调度流程\nclass MonoBehaviour\n{\n    private List<IEnumerator> coroutines = new List<IEnumerator>();",
          "void Update()\n    {\n        // 每帧遍历执行所有协程\n        for (int i = 0; i < coroutines.Count; i++)\n        {\n            var coroutine = coroutines[i];\n            if (!MoveNext(coroutine))\n            {\n                coroutines.RemoveAt(i--);\n            }\n        }\n    }\n}\n```"
        ]
      },
      {
        "heading": "2.2 状态机转换",
        "paragraphs": [
          "编译器将协程转换为状态机：",
          "```csharp\n// 原始协程\nIEnumerator MyCoroutine()\n{\n    Debug.Log(\"Start\");\n    yield return null;\n    Debug.Log(\"Next frame\");\n    yield return new WaitForSeconds(1);\n    Debug.Log(\"After 1 second\");\n}",
          "// 编译器生成的近似代码\nclass <MyCoroutine>d__0 : IEnumerator\n{\n    private int <>1__state;\n    private object <>2__current;",
          "bool MoveNext()\n    {\n        switch (<>1__state)\n        {\n            case 0:\n                Debug.Log(\"Start\");\n                <>2__current = null;\n                <>1__state = 1;\n                return true;\n            case 1:\n                Debug.Log(\"Next frame\");\n                <>2__current = new WaitForSeconds(1);\n                <>1__state = 2;\n                return true;\n            case 2:\n                Debug.Log(\"After 1 second\");\n                return false;\n        }\n        return false;\n    }\n}\n```"
        ]
      },
      {
        "heading": "3.1 常用 Yield 对象",
        "paragraphs": [
          "| Yield 类型 | 底层处理 | 恢复条件 |\n| --- | --- | --- |\n| `null` | 下一帧继续 | 下一帧 Update 后 |\n| `WaitForSeconds` | 记录时间戳 | 指定时间后 |\n| `WaitForEndOfFrame` | 加入渲染队列 | 当前帧渲染完成后 |\n| `WaitForFixedUpdate` | 加入物理队列 | FixedUpdate 后 |\n| `WWW`/ `AsyncOperation` | 检查 isDone | 异步操作完成 |\n| `CustomYieldInstruction` | 实现 `keepWaiting` | `keepWaiting` 为 false |"
        ]
      },
      {
        "heading": "3.2 自定义 Yield 指令",
        "paragraphs": [
          "```csharp\nclass WaitForCustom : CustomYieldInstruction\n{\n    private float waitTime;\n    private float startTime;",
          "public WaitForCustom(float seconds)\n    {\n        waitTime = seconds;\n        startTime = Time.time;\n    }",
          "public override bool keepWaiting\n    {\n        get { return Time.time - startTime < waitTime; }\n    }\n}\n```"
        ]
      },
      {
        "heading": "4.1 启动和停止",
        "paragraphs": [
          "```csharp\n// StartCoroutine 返回 Coroutine 对象（实质是 IEnumerator 的包装）\nCoroutine coroutine = StartCoroutine(MyCoroutine());",
          "// StopCoroutine 的几种方式\nStopCoroutine(coroutine);      // 通过 Coroutine 对象\nStopCoroutine(\"MyCoroutine\");  // 通过方法名\nStopAllCoroutines();          // 停止所有协程\n```"
        ]
      },
      {
        "heading": "4.2 协程执行栈",
        "paragraphs": [
          "```csharp\n// Unity 内部管理结构\nclass CoroutineManager\n{\n    // 全局协程列表\n    static List<Coroutine> globalCoroutines = new List<Coroutine>();",
          "// 每个 MonoBehaviour 的协程列表\n    Dictionary<MonoBehaviour, List<Coroutine>> behaviourCoroutines;",
          "// 延迟执行的协程队列\n    List<DelayedCoroutine> delayedCoroutines = new List<DelayedCoroutine>();\n}\n```"
        ]
      },
      {
        "heading": "5.1 协程开销",
        "paragraphs": [
          "-   **内存分配**：每次 `yield return`都会创建新对象\n-   **GC 压力**：Yield 指令对象是短期对象，产生 GC\n-   **调度开销**：每帧遍历检查所有活动协程"
        ]
      },
      {
        "heading": "5.2 优化建议",
        "paragraphs": [
          "```csharp\n// 不好的做法：每帧创建新对象\nIEnumerator BadCoroutine()\n{\n    while (true)\n    {\n        yield return null;  // 每帧产生 GC\n    }\n}",
          "// 优化：重用对象\nprivate WaitForSeconds waitOneSecond = new WaitForSeconds(1f);",
          "IEnumerator GoodCoroutine()\n{\n    while (true)\n    {\n        yield return waitOneSecond;  // 重用对象\n    }\n}\n```"
        ]
      },
      {
        "heading": "6. 与 async/await 的比较",
        "paragraphs": [
          "| 特性 | Unity 协程 | C# async/await |\n| --- | --- | --- |\n| 线程 | 主线程 | 可配置线程池 |\n| 异常处理 | 会中断协程 | 可通过 try-catch 捕获 |\n| 返回值 | 无直接返回值 | 有返回值 |\n| 取消机制 | 有限的取消支持 | 完善的 CancellationToken |\n| 兼容性 | 需 `MonoBehaviour` | 纯 C# 功能 |"
        ]
      },
      {
        "heading": "7.1 协程不执行的可能情况",
        "paragraphs": [
          "1.  **`GameObject` 未激活**\n2.  **`MonoBehaviour` 被禁用**\n3.  **在错误的时机调用**\n4.  **被 `StopCoroutine` 停止**"
        ]
      },
      {
        "heading": "7.2 协程调试技巧",
        "paragraphs": [
          "```csharp\n// 添加调试信息\nIEnumerator DebuggableCoroutine()\n{\n    Debug.Log($\"Coroutine started: {Time.frameCount}\");",
          "yield return null;",
          "Debug.Log($\"Coroutine continued: {Time.frameCount}\");\n}",
          "// 使用 Coroutine 名称\nStartCoroutine(\"MyCoroutine\");\nStopCoroutine(\"MyCoroutine\");  // 可以通过名称停止\n```"
        ]
      },
      {
        "heading": "8. 底层源码分析要点",
        "paragraphs": [
          "Unity 协程核心逻辑位于：",
          "-   `UnityEngine.cs`\\- `MonoBehaviour`的协程方法\n-   `SetupCoroutine`\\- 协程调度和 Yield 指令处理\n-   `PlayerLoop`系统 - 协程在游戏循环中的集成"
        ]
      },
      {
        "heading": "总结",
        "paragraphs": [
          "Unity 协程是基于 C# 迭代器实现的**主线程异步调度系统**，其核心是：",
          "1.  **状态机转换**：编译器将协程转为状态机\n2.  **帧驱动执行**：在游戏循环的特定阶段执行\n3.  **Yield 指令系统**：通过检查对象的 `keepWaiting`或 `MoveNext`控制流程\n4.  **单线程安全**：所有操作在主线程，无并发问题",
          "理解协程底层有助于：",
          "-   避免性能问题\n-   正确管理协程生命周期\n-   编写更高效的异步代码\n-   调试协程相关问题"
        ]
      }
    ],
    "takeaways": []
  },
  {
    "id": "wp-53",
    "tags": [
      "Unity"
    ],
    "categoryId": "unity",
    "title": "Unity物体渲染",
    "date": "2025-12-17",
    "cover": "🎮",
    "excerpt": "1. 导入与资源处理 文件检测：Unity监控项目文件夹（Assets），当检测到新文件（如.fbx、.obj、.png、.jpg等）时，会触发导入流程。 资源转换：根据文件类型，Unity的导入器（Importers）会进行相应处理： 3...",
    "sections": [
      {
        "heading": "1. 导入与资源处理",
        "paragraphs": [
          "-   **文件检测**：Unity监控项目文件夹（Assets），当检测到新文件（如.fbx、.obj、.png、.jpg等）时，会触发导入流程。\n    \n-   **资源转换**：根据文件类型，Unity的导入器（Importers）会进行相应处理：\n    \n    -   **3D模型**：FBX/OBJ等文件被解析为网格（Mesh）、材质（Material）、动画（Animation）等子资源。\n        \n    -   **纹理**：图片被转换为Unity内部格式（如DXT压缩），生成纹理资源。\n        \n    -   **其他**：音频、视频等也会被相应处理。\n        \n-   **生成元数据**：为每个资源创建`.meta`文件，存储导入设置（如缩放、法线计算、压缩格式等）。",
          "* * *"
        ]
      },
      {
        "heading": "2. 场景实例化",
        "paragraphs": [
          "当你从**Project窗口**拖入**Scene视图**或**Hierarchy窗口**时：",
          "-   **实例化GameObject**：Unity根据资源创建对应的GameObject：\n    -   3D模型 → 包含`MeshFilter`（持有Mesh）和`MeshRenderer`（持有材质/着色器）。\n    -   2D精灵 → 包含`SpriteRenderer`。\n-   **组件与默认设置**：自动添加必要的组件（如Collider，如果模型包含碰撞体数据），并根据导入设置调整位置、比例。",
          "* * *"
        ]
      },
      {
        "heading": "3. 渲染流程（简化版）",
        "paragraphs": [
          "实例化后的物体进入Unity的渲染管线，具体取决于项目使用的渲染管线（Built-in RP、URP或HDRP）。以通用流程为例："
        ]
      },
      {
        "heading": "A. 准备阶段",
        "paragraphs": [
          "-   **材质与着色器**：\n    -   如果模型自带材质，Unity会使用它；否则生成默认材质（Standard Shader等）。\n    -   着色器（Shader）定义物体的表面属性（颜色、光滑度、法线等）和光照计算方式。\n-   **渲染器组件**：`MeshRenderer`或`SpriteRenderer`负责将物体的几何数据提交给渲染管线。"
        ]
      },
      {
        "heading": "B. 剔除（Culling）",
        "paragraphs": [
          "-   **视锥体剔除**：Unity摄像机每帧计算视锥体，剔除视野外的物体。\n-   **遮挡剔除**（如果启用）：进一步剔除被其他物体完全遮挡的物体。"
        ]
      },
      {
        "heading": "C. 渲染循环",
        "paragraphs": [
          "Unity每帧执行以下关键步骤（以Built-in RP为例）：",
          "1.  **几何阶段**：\n    -   物体网格数据（顶点、UV、法线）经变换（Model→World→View空间）后，传递给GPU。\n    -   如果使用动态批处理或GPU Instancing，Unity会合并相同材质的物体以减少Draw Call。\n2.  **光照与阴影**：\n    -   根据场景光源（方向光、点光源等）计算光照：\n        -   前向渲染（Forward Rendering）：为每个物体计算一个主光和多个逐像素光。\n        -   延迟渲染（Deferred Rendering）：先将几何信息写入G-Buffer，再计算光照。\n    -   阴影渲染：如果有光源投射阴影，Unity会从光源视角渲染深度图，用于后续阴影计算。\n3.  **像素处理**：\n    -   着色器对每个像素计算颜色，结合纹理采样、光照、阴影等。\n    -   透明物体通常会在不透明物体之后渲染，并启用Alpha混合。\n4.  **后期处理**：\n    -   可选的屏幕效果（如Bloom、色调调整）应用于最终图像。\n5.  **输出到屏幕**：渲染结果输出到摄像机目标（通常是屏幕或渲染纹理）。",
          "* * *"
        ]
      },
      {
        "heading": "4. 优化相关",
        "paragraphs": [
          "-   **批处理**：拖入的物体如果材质相同，可能被静态/动态批处理合并。\n-   **LOD Group**：如果模型包含多级细节，Unity会根据距离自动切换不同精度的网格。\n-   **光照贴图**：如果物体标记为Static，其光照信息可烘焙到光照贴图中，提升运行时性能。",
          "* * *"
        ]
      },
      {
        "heading": "5. 注意事项",
        "paragraphs": [
          "-   **性能影响**：复杂模型（高多边形、多材质）会增加Draw Call，需通过优化减少负担。\n-   **渲染管线差异**：URP/HDRP的渲染流程更模块化，但核心逻辑（剔除→几何处理→光照→输出）类似。\n-   **自定义着色器**：如果使用自定义Shader，需确保其与当前渲染管线兼容。",
          "* * *"
        ]
      },
      {
        "heading": "总结",
        "paragraphs": [
          "拖入物体时，Unity完成了**资源处理→实例化→纳入渲染管线**的完整流程。渲染过程则是每帧按**剔除、几何处理、光照计算、像素着色、后期处理**的顺序执行，最终将物体视觉化。理解这一流程有助于优化美术资源和渲染性能。"
        ]
      }
    ],
    "takeaways": []
  }
];
