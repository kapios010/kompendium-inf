import { getPageImage, source } from '@/lib/source'
import { DocsBody, DocsDescription, DocsPage, DocsTitle, EditOnGitHub } from 'fumadocs-ui/layouts/notebook/page'
import { getGithubLastEdit } from 'fumadocs-core/content/github';
import { notFound } from 'next/navigation'
import { getMDXComponents } from '@/mdx-components'
import type { Metadata } from 'next'
import { createRelativeLink } from 'fumadocs-ui/mdx'
import { NotFound } from '@/components/not-found'
import { Edit, Flag, Pencil } from 'lucide-react'
import LastEditTime from '@/components/github-edit-time';



export default async function Page(props: PageProps<'/kompendium/[[...slug]]'>) {
    const params = await props.params
    const page = source.getPage(params.slug)
    if (!page) return <NotFound />

    const MDX = page.data.body

    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <div className="md:absolute top-8 right-8 flex gap-2">
            <EditOnGitHub href={`https://github.com/KompendiumInfDev/kompendium-inf/blob/main/content/kompendium/${page.path}`}>
              <Edit size={14}/> Edytuj na GitHubie
            </EditOnGitHub>
            <EditOnGitHub href={`https://github.com/KompendiumInfDev/kompendium-inf/issues`}>
              <Flag size={14}/> Zgłoś problem
            </EditOnGitHub>
            </div>

            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDX
                    components={getMDXComponents({
                      // this allows you to link to other pages with relative file paths
                      a: createRelativeLink(source, page),
                    })}
                />
            </DocsBody>
            <hr className='mt-4'/>
            <LastEditTime path={page.path}/>
        </DocsPage>
    )
}

export async function generateStaticParams() {
    return source.generateParams()
}

export async function generateMetadata(props: PageProps<'/kompendium/[[...slug]]'>): Promise<Metadata> {
    const params = await props.params
    const page = source.getPage(params.slug)
    if (!page)
        return {
            title: 'Nie Znaleziono',
        }

    return {
        title: page.data.title,
        description: page.data.description,
        openGraph: {
            images: getPageImage(page).url,
        },
    }
}
