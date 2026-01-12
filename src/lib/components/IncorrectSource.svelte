<script lang="ts">
    let { src = $bindable(), goToQuestion = undefined } = $props();

    function toYouTubeEmbed(url: string) {
		try {
			const u = new URL(url);
			if (u.hostname.includes('youtube.com')) {
				const id = u.searchParams.get('v') || '';
				return id ? `https://www.youtube.com/embed/${id}` : url;
			}
			if (u.hostname.includes('youtu.be')) {
				const id = u.pathname.replace('/', '');
				return id ? `https://www.youtube.com/embed/${id}` : url;
			}
			return url;
		} catch {
			return url;
		}
	}
</script>

<div class="m-3">
    {#if 'url' in src.source && src.source.url}
                <div class="study-item card">
                    <h3 class="text-lg font-semibold text-slate-800 mb-3">{src.source.title}</h3>
                    {#if goToQuestion}
                    <div class="mb-3">
                        <p class="text-sm text-slate-600">Explains questions:</p>
                        <ul class="list-disc list-inside text-sm text-slate-700">
                            {#each src.indices as q}
                                <li>
                                    <a href="#question-{q + 1}" class="text-blue-600 hover:underline" onclick={() => goToQuestion(q + 1)}>
                                        Question {q + 1}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    {/if}
                    <div class="video">
                        <iframe
                            src={toYouTubeEmbed(src.source.url)}
                            title={src.source.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            {/if}

            {#if 'text' in src.source && src.source.text}
                <div class="study-item bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-4">
                    <h3 class="text-lg font-semibold text-slate-800 mb-3">{src.source.title}</h3>
                    {#if goToQuestion}
                    <div class="mb-3">
                        <p class="text-sm text-slate-600">Explains questions:</p>
                        <ul class="list-disc list-inside text-sm text-slate-700">
                            {#each src.indices as q}
                                <li>
                                    <a href="#question-{q + 1}" class="text-blue-600 hover:underline" onclick={() => goToQuestion(q + 1)}>
                                        Question {q + 1}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    {/if}
                    <blockquote class="text-slate-700 italic border-l-4 border-slate-300 pl-4 leading-relaxed">
                        {@html src.source.text}
                    </blockquote>
                </div>
            {/if}
</div>