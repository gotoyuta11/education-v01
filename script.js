document.addEventListener("DOMContentLoaded", () => {
  const userName = "鈴木 太郎";
  const courseProgress = [
    { name: "現代文", progress: 75 },
    { name: "数学ⅡB", progress: 60 },
    { name: "英語", progress: 45 },
  ];
  const upcomingLessons = [
    { title: "三角関数の応用", date: "2024年2月15日 15:00", subject: "数学ⅡB" },
    { title: "英語長文読解", date: "2024年2月16日 16:30", subject: "英語" },
  ];
  const nextTasks = [
    { title: "現代文 - 評論文課題", deadline: "2024年2月17日" },
    { title: "数学 - 期末試験対策", deadline: "2024年2月20日" },
  ];

  const root = document.getElementById("root");

  // ヘッダー
  const header = `
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-2xl font-roboto text-[#1a365d] mb-2">
            ようこそ、${userName}さん
          </h1>
          <p class="text-gray-600">今週の学習目標達成率: 68%</p>
        </div>
        <div class="flex items-center gap-4">
          <a href="/courses" class="text-[#2563eb] hover:text-[#1d4ed8] font-medium">
            コース一覧
          </a>
          <button class="bg-[#2563eb] text-white px-4 py-2 rounded-lg hover:bg-[#1d4ed8] transition-colors">
            <i class="fas fa-plus mr-2"></i>新しいコースを追加
          </button>
        </div>
      </div>
    </div>
  `;

  // 学習進捗
  const progressHTML = courseProgress.map(course => `
    <div>
      <div class="flex justify-between mb-1">
        <a href="/courses" class="text-gray-700 hover:text-[#2563eb]">${course.name}</a>
        <span class="text-gray-600">${course.progress}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-[#2563eb] rounded-full h-2" style="width: ${course.progress}%"></div>
      </div>
    </div>
  `).join("");

  // 次のタスク
  const tasksHTML = nextTasks.map(task => `
    <div class="flex items-center justify-between border-b pb-3">
      <div>
        <p class="text-gray-800">${task.title}</p>
        <p class="text-sm text-gray-500">期限: ${task.deadline}</p>
      </div>
      <button class="text-[#2563eb] hover:text-[#1d4ed8]">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  `).join("");

  // ライブ授業
  const lessonsHTML = upcomingLessons.map(lesson => `
    <div class="border-l-4 border-[#2563eb] pl-4">
      <p class="font-medium text-gray-800">${lesson.title}</p>
      <p class="text-sm text-gray-500">${lesson.subject}</p>
      <p class="text-sm text-gray-500">${lesson.date}</p>
    </div>
  `).join("");

  // 全体構造
  root.innerHTML = `
    ${header}
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="col-span-2">
          <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 class="text-xl font-roboto text-[#1a365d] mb-4">学習進捗</h2>
            <div class="space-y-4">${progressHTML}</div>
          </div>
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-xl font-roboto text-[#1a365d] mb-4">次のタスク</h2>
            <div class="space-y-4">${tasksHTML}</div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-xl font-roboto text-[#1a365d] mb-4">ライブ授業予定</h2>
            <div class="space-y-4">${lessonsHTML}</div>
          </div>
        </div>
      </div>
    </div>
  `;
});
