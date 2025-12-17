import { getPageImage, source } from '@/lib/source'
import { DocsBody, DocsDescription, DocsPage, DocsTitle, EditOnGitHub, PageBreadcrumb } from 'fumadocs-ui/layouts/docs/page'
import { getGithubLastEdit } from 'fumadocs-core/content/github';
import { notFound } from 'next/navigation'
import { getMDXComponents } from '@/mdx-components'
import type { Metadata } from 'next'
import { createRelativeLink } from 'fumadocs-ui/mdx'
import { NotFound } from '@/components/not-found'
import { Edit, Flag, Pencil } from 'lucide-react'
import LastEditTime from '@/components/github-edit-time';
import { ComponentProps } from 'react';
import { cn } from 'fumadocs-ui/utils/cn';


function PageEditOptions(params: {path: string} & ComponentProps<'div'>) {
    return (
    <div className={cn("flex gap-2", params.className)}>
    <EditOnGitHub href={`https://github.com/KompendiumInfDev/kompendium-inf/blob/main/content/kompendium/${params.path}`}>
      <Edit size={14}/> Edytuj na GitHubie
    </EditOnGitHub>
    <EditOnGitHub href={`https://github.com/KompendiumInfDev/kompendium-inf/issues`}>
      <Flag size={14}/> Zgłoś problem
    </EditOnGitHub>
    </div>
    )
}

export default async function Page(props: PageProps<'/kompendium/[[...slug]]'>) {
    const params = await props.params
    const page = source.getPage(params.slug)
    if (!page) return <NotFound />

    const MDX = page.data.body

    return (
        <DocsPage toc={page.data.toc} full={page.data.full} breadcrumb={{enabled: false}}>
            <div className='flex flex-col-reverse md:flex-row gap-4'>
            <PageBreadcrumb includePage={true} />
            <PageEditOptions path={page.path} className='right-0 w-full md:justify-end'/>
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
            <LastEditTime path={page.path} />
            <hr/>
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
