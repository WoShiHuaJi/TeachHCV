export default [
  {
    id: 'git-01',
    title: 'Git 基础：安装配置与本地仓库',
    summary: '学会初始化仓库与提交代码',
    minutes: 10,
    sections: [
      {
        heading: '安装与首次配置',
        text: 'Git 是目前最流行的版本控制工具，几乎每家公司都在用。安装后第一件事是告诉 Git 你是谁：设置用户名和邮箱，这些信息会记录到每一次提交里，方便同事知道代码是谁写的。\n配置只需要做一次，之后可以用 git config --list 查看当前配置。建议把 core.autocrlf 设为 true（Windows 下），避免换行符带来的麻烦。',
        code: 'git config --global user.name "张三"\ngit config --global user.email "zhangsan@example.com"\ngit config --list',
        lang: 'bash'
      },
      {
        heading: '创建仓库：init 与 clone',
        text: '开始用 Git 管理代码有两种方式：从零开始一个项目，用 git init 在当前目录初始化一个本地仓库；或者把别人已有的项目完整复制下来，用 git clone 加上仓库地址。\n初始化后目录里会出现一个隐藏的 .git 文件夹，所有历史记录都存在里面，千万别手动删它。克隆则会自动连好远程，拿到全部代码和历史。',
        code: 'mkdir my-project\ncd my-project\ngit init\n\ngit clone https://github.com/user/repo.git',
        lang: 'bash'
      },
      {
        heading: '日常工作流：add 与 commit',
        text: 'Git 工作有三个区域：工作区（你编辑的文件）、暂存区（准备提交的内容）、本地仓库（已保存的历史）。\n改完代码后，先用 git add 把文件放进暂存区，再用 git commit -m "说明" 提交到仓库。提交说明要写清楚这次改了什么，比如"修复登录页按钮样式"。小步提交是好习惯：每完成一个小功能就提交一次，出问题时容易回退。',
        code: 'git add index.html\ngit add .\ngit commit -m "添加首页导航栏"',
        lang: 'bash'
      },
      {
        heading: '查看状态与历史：status 和 log',
        text: '记不住自己改到哪了？git status 是你的好帮手，它会告诉你哪些文件被修改、哪些已暂存、哪些还没被 Git 跟踪。\n想看过去的提交记录用 git log，会列出每次提交的作者、时间和说明；加 --oneline 可以压缩成一行一条，看起来更清爽。这两个命令使用频率极高，新手阶段建议每操作一步就 status 一下，培养对仓库状态的直觉。',
        code: 'git status\ngit log\ngit log --oneline',
        lang: 'bash'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '要撤销已经 git add 到暂存区的文件（保留工作区修改），该用哪条命令？',
        options: ['git restore --staged <file>', 'git checkout -- <file>', 'git reset --hard', 'git commit --amend'],
        answer: 0,
        explanation: 'git restore --staged（旧版是 git reset HEAD <file>）只把文件移出暂存区，工作区的改动会保留。'
      },
      {
        type: 'single',
        question: 'git commit -m "说明" 中的 -m 参数作用是？',
        options: ['合并分支', '直接在命令后写提交说明', '提交并推送到远程', '标记重要提交'],
        answer: 1,
        explanation: '-m 后面跟的是提交信息（message），不加 -m 会打开编辑器让你输入说明。'
      },
      {
        type: 'judge',
        question: 'git clone 下来的项目只包含最新代码，不包含历史提交记录。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。clone 会复制完整的仓库，包括全部历史提交和分支信息。'
      },
      {
        type: 'multiple',
        question: '以下哪些命令用于查看仓库信息而不是修改它？（多选）',
        options: ['git status', 'git add', 'git log', 'git commit'],
        answer: [0, 2],
        explanation: 'status 查看当前状态，log 查看提交历史，它们都是只读操作；add 和 commit 会修改仓库。'
      },
      {
        type: 'single',
        question: '要在当前目录从零开始初始化一个本地仓库，该用哪条命令？',
        options: ['git init', 'git clone', 'git remote add', 'git status'],
        answer: 0,
        explanation: 'git init 会在当前目录初始化本地仓库，生成隐藏的 .git 文件夹；clone 是复制别人已有的仓库。'
      },
      {
        type: 'single',
        question: '想把当前目录下所有改动一次性放入暂存区，该用哪条命令？',
        options: ['git add .', 'git commit -m', 'git push', 'git log'],
        answer: 0,
        explanation: 'git add . 会把当前目录的所有改动加入暂存区；也可以 git add 文件名 只暂存指定文件。'
      },
      {
        type: 'judge',
        question: 'git init 后生成的 .git 文件夹是隐藏目录，手动删除它不会影响仓库。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。.git 文件夹里保存着全部历史记录，删掉它等于丢掉整个仓库的历史。'
      },
      {
        type: 'judge',
        question: '用 git config --list 可以查看当前所有的 Git 配置。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。配置通常只需要做一次，之后随时可以用 git config --list 查看。'
      },
      {
        type: 'multiple',
        question: 'Git 工作的三个区域包括以下哪些？（多选）',
        options: ['工作区', '暂存区', '本地仓库', '回收站'],
        answer: [0, 1, 2],
        explanation: '三个区域是工作区（编辑文件）、暂存区（准备提交）和本地仓库（已保存的历史）。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于良好的提交习惯？（多选）',
        options: ['提交说明写清楚这次改了什么', '每完成一个小功能就提交一次', '提交说明随便写无所谓', '攒够几个月的代码再一次性提交'],
        answer: [0, 1],
        explanation: '小步提交加清晰的说明，出问题时容易回退，也方便同事理解历史。'
      }
    ]
  },
  {
    id: 'git-02',
    title: '分支与合并',
    summary: '掌握分支操作与冲突解决',
    minutes: 12,
    sections: [
      {
        heading: '为什么需要分支',
        text: '分支是 Git 最强大的功能。它让你可以在不影响主代码的情况下开发新功能：主分支（main）保持稳定可随时发布，新功能在自己的分支上写，写好测完再合并回去。\n创建分支用 git branch 分支名，切换分支用 git switch 分支名（旧命令是 git checkout）。更常用的是一条命令搞定：git switch -c 分支名，创建并立即切换过去。',
        code: 'git branch feature-login\ngit switch feature-login\n\ngit switch -c feature-login',
        lang: 'bash'
      },
      {
        heading: '合并分支：merge',
        text: '功能开发完成后，先切回主分支，再用 git merge 分支名 把新功能合并进来。\n合并分两种情况：如果主分支在你开发期间没有新提交，Git 会直接"快进"（fast-forward），只是把指针移过去；如果两边都有新提交，Git 会自动创建一个新的合并提交，把两条线合到一起。合并完成后，功能分支就可以删掉了，保持仓库整洁。',
        code: 'git switch main\ngit merge feature-login\ngit branch -d feature-login',
        lang: 'bash'
      },
      {
        heading: '冲突解决',
        text: '当两个分支改了同一文件的同一部分，Git 无法自动决定保留哪个，就会报冲突（conflict）。别慌，这是每个程序员都会遇到的日常。\n打开冲突文件，会看到 <<<<<<<、=======、>>>>>>> 标记，中间隔开的两边分别是两个分支的内容。手动编辑，留下正确的代码并删掉标记，然后 git add 该文件，最后 git commit 完成合并。在团队里，解决冲突前最好和对方沟通一下，确认该保留谁的逻辑。',
        code: 'git status\n# 编辑冲突文件，删除冲突标记\ngit add conflicted-file.js\ngit commit -m "解决合并冲突"',
        lang: 'bash'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '创建并切换到新分支 dev 的一条命令是？',
        options: ['git branch dev', 'git switch -c dev', 'git merge dev', 'git switch dev'],
        answer: 1,
        explanation: 'git switch -c dev 相当于 git branch dev 加 git switch dev 两步合一。'
      },
      {
        type: 'judge',
        question: '合并完成后，已经没用的功能分支建议删除，保持仓库整洁。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。功能合并进主分支后，用 git branch -d 删除该分支是良好习惯。'
      },
      {
        type: 'single',
        question: '合并时出现冲突，文件中 <<<<<<< 和 ======= 之间的内容代表什么？',
        options: ['需要删除的代码', '当前分支（HEAD）的内容', '要合并进来的分支内容', 'Git 自动生成的注释'],
        answer: 1,
        explanation: '<<<<<<< 到 ======= 之间是当前分支的内容，======= 到 >>>>>>> 之间是合并进来的分支内容。'
      },
      {
        type: 'multiple',
        question: '解决完冲突后，完成合并需要哪些操作？（多选）',
        options: ['编辑文件删除冲突标记', 'git add 冲突文件', 'git push origin main', 'git commit 完成合并'],
        answer: [0, 1, 3],
        explanation: '解决冲突的标准流程是：编辑文件去掉标记、add 暂存、commit 提交。push 是推送到远程，与完成本地合并无关。'
      },
      {
        type: 'single',
        question: '功能开发完成后，已切回 main 分支，要把 feature-login 分支合并进来，该执行哪条命令？',
        options: ['git merge feature-login', 'git branch -d feature-login', 'git switch feature-login', 'git fetch feature-login'],
        answer: 0,
        explanation: '先 git switch main 切回主分支，再 git merge feature-login 把新功能合并进来。'
      },
      {
        type: 'single',
        question: '合并完成后，要删除已经没用的功能分支 feature-login，该用哪条命令？',
        options: ['git branch -d feature-login', 'git switch -d feature-login', 'git merge --delete feature-login', 'git branch -c feature-login'],
        answer: 0,
        explanation: 'git branch -d 用于删除已合并的分支，保持仓库整洁。'
      },
      {
        type: 'judge',
        question: '如果主分支在你开发期间没有新提交，合并时会直接快进（fast-forward），不产生新的合并提交。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。主分支没有新提交时，Git 只是把指针移到功能分支的最新提交，即快进合并。'
      },
      {
        type: 'judge',
        question: '解决冲突时不用和别人沟通，直接全部保留自己分支的内容就行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。团队里解决冲突前最好和对方沟通，确认该保留谁的逻辑，避免误删别人的代码。'
      },
      {
        type: 'multiple',
        question: '关于 git merge 合并，以下说法正确的有？（多选）',
        options: ['两边都有新提交时会自动创建一个新的合并提交', '主分支没有新提交时会发生快进合并', '合并前需要先切回主分支', '合并后功能分支会被自动删除'],
        answer: [0, 1, 2],
        explanation: '合并前先切回主分支；快进或产生合并提交取决于两边提交情况；功能分支需要手动用 git branch -d 删除。'
      },
      {
        type: 'multiple',
        question: '冲突文件中会出现哪些标记？（多选）',
        options: ['<<<<<<<', '=======', '>>>>>>>', '+++++++'],
        answer: [0, 1, 2],
        explanation: '冲突标记是 <<<<<<<、======= 和 >>>>>>>，解决时要手动编辑并删掉这些标记。'
      }
    ]
  },
  {
    id: 'git-03',
    title: '远程协作：GitHub 与 Pull Request',
    summary: '学会推送拉取与团队协作流程',
    minutes: 12,
    sections: [
      {
        heading: '远程仓库与 GitHub',
        text: 'GitHub 是最流行的代码托管平台，它把你的 Git 仓库放到云端，方便备份和多人协作。在 GitHub 上建好仓库后，用 git remote add origin 地址 把本地仓库和它关联起来，origin 是远程仓库的默认别名。\n关联好后，git push -u origin main 就能把本地的 main 分支推送上去，-u 会记住对应关系，以后直接 git push 就行。',
        code: 'git remote add origin https://github.com/user/repo.git\ngit push -u origin main',
        lang: 'bash'
      },
      {
        heading: '同步代码：fetch、pull 与 push',
        text: '多人协作时，别人也会往远程推代码。git fetch 只是把远程的最新状态下载到本地查看，不会动你的文件；git pull 则相当于 fetch 加 merge，直接把远程更新合并进当前分支。\n每天开始工作前先 git pull 是好习惯，能减少冲突。push 之前也建议先 pull，如果远程有别人的新提交，直接 push 会被拒绝。记住口诀：先拉再推，冲突远离你。',
        code: 'git fetch origin\ngit pull\ngit push',
        lang: 'bash'
      },
      {
        heading: 'Pull Request 协作流程',
        text: '在团队里，一般不会直接往主分支推代码，而是走 Pull Request（简称 PR）流程：\n1. 从主分支切出自己的功能分支；2. 在分支上开发并提交；3. 把分支推送到远程；4. 在 GitHub 上发起 PR，请求合并到主分支；5. 同事审查代码（Code Review），提意见修改；6. 审查通过后合并，删除功能分支。\nPR 让每行代码入库前都有人把关，是工程质量的重要保障，应届生入职后一定要熟悉这套流程。',
        code: 'git switch -c feature-search\ngit add .\ngit commit -m "添加搜索功能"\ngit push -u origin feature-search\n# 然后在 GitHub 网页上发起 Pull Request',
        lang: 'bash'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'git pull 命令相当于哪两个命令的组合？',
        options: ['git clone + git merge', 'git fetch + git merge', 'git fetch + git push', 'git add + git commit'],
        answer: 1,
        explanation: 'pull = fetch（下载远程更新）+ merge（合并进当前分支）。'
      },
      {
        type: 'judge',
        question: 'git fetch 会自动修改你当前工作区的文件。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。fetch 只下载远程信息供查看，不会改变你的工作区，是相对安全的操作。'
      },
      {
        type: 'single',
        question: '第一次把本地 main 分支推送到远程并建立跟踪关系，应该用？',
        options: ['git push -u origin main', 'git pull origin main', 'git clone origin main', 'git merge origin main'],
        answer: 0,
        explanation: 'git push -u origin main 中的 -u 会建立本地与远程分支的跟踪关系，之后直接 git push 即可。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于标准 Pull Request 流程中的环节？（多选）',
        options: ['在功能分支上开发', '同事进行 Code Review', '直接强制推送到主分支', '审查通过后合并'],
        answer: [0, 1, 3],
        explanation: 'PR 流程强调在分支上开发、经过审查再合并；直接强推主分支会破坏协作规范，属于禁忌操作。'
      },
      {
        type: 'single',
        question: '在 GitHub 上建好仓库后，要把本地仓库和它关联起来，该用哪条命令？',
        options: ['git remote add origin 仓库地址', 'git clone 仓库地址', 'git push origin main', 'git fetch origin'],
        answer: 0,
        explanation: 'git remote add origin 地址 用来关联本地与远程仓库，origin 是远程仓库的默认别名。'
      },
      {
        type: 'single',
        question: 'push 时因为远程已有别人的新提交被拒绝，正确的做法是？',
        options: ['先 git pull 再重新 push', '直接强制 push 覆盖远程', '删除远程仓库重建', '放弃推送只保留本地'],
        answer: 0,
        explanation: '口诀是先拉再推：先 pull 把远程更新合并进来，再 push 就不会被拒绝。'
      },
      {
        type: 'judge',
        question: 'origin 是远程仓库的默认别名，方便后续 push 和 pull 时引用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。git remote add origin 地址 中 origin 就是给远程仓库起的默认别名。'
      },
      {
        type: 'judge',
        question: 'Pull Request 流程中，同事审查代码的环节叫 Code Review，审查通过后才能合并。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Code Review 让每行代码入库前都有人把关，是工程质量的重要保障。'
      },
      {
        type: 'multiple',
        question: '多人协作时，以下哪些是减少冲突的好习惯？（多选）',
        options: ['每天开始工作前先 git pull', 'push 之前先 pull', '远程有新提交时强制 push 覆盖', '小步提交并经常同步'],
        answer: [0, 1, 3],
        explanation: '先拉再推、勤同步能有效减少冲突；强制 push 覆盖远程会毁掉别人的工作，绝对不能做。'
      },
      {
        type: 'multiple',
        question: '关于 GitHub 与远程仓库，以下说法正确的有？（多选）',
        options: ['GitHub 是流行的代码托管平台', '远程仓库方便备份和多人协作', 'GitHub 上的仓库无法保存历史提交', '可以在 GitHub 网页上发起 Pull Request'],
        answer: [0, 1, 3],
        explanation: 'GitHub 把仓库放到云端，保存完整历史，支持多人协作和 Pull Request 流程。'
      }
    ]
  }
]
