import { fetchComments, fetchReplies, fetchUserName } from "@/lib/data";

import { MessageCircle, CornerDownLeft, UserRound } from "lucide-react";

import CommentForm from "./CommentForm";
import ReplyForm from "./ReplyForm";
import { auth } from "@/auth";
import DeleteComment from "./DeleteComment";

async function Comments({ productId }: { productId: string }) {
  const session = await auth();
  const comments = await fetchComments(productId);

  const commentsWithDetails = await Promise.all(
    comments.map(async (comment) => {
      const [users, replies] = await Promise.all([
        fetchUserName(comment.user_id),
        fetchReplies(comment.id),
      ]);

      const repliesWithDetails = await Promise.all(
        replies.map(async (reply) => {
          const replyUsers = await fetchUserName(reply.user_id);

          return {
            ...reply,
            userName: replyUsers?.[0]?.name ?? "کاربر",
          };
        }),
      );

      return {
        ...comment,
        userName: users?.[0]?.name ?? "کاربر",
        replies: repliesWithDetails,
      };
    }),
  );

  return (
    <section
      dir="rtl"
      className="mt-8 rounded-2xl border border-[#342114]/10 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-xl bg-[#fcedda] text-[#54341f]">
          <MessageCircle className="size-6" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#342114]">نظرات کاربران</h2>
          <p className="mt-1 text-sm text-[#342114]/60">
            تجربه‌ات رو درباره این محصول با دیگران به اشتراک بذار.
          </p>
        </div>
      </div>

      <div className="my-6 h-px bg-[#342114]/10" />

      <CommentForm productId={productId} />

      <div className="my-6 flex items-center justify-between">
        <h3 className="font-bold text-[#342114]">دیدگاه‌ها</h3>
        <span className="rounded-lg bg-[#fcedda] px-3 py-1.5 text-sm text-[#54341f]">
          {commentsWithDetails.length} نظر
        </span>
      </div>

      {commentsWithDetails.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#342114]/20 py-10 text-center">
          <MessageCircle className="mx-auto size-9 text-[#54341f]/40" />
          <p className="mt-3 font-medium text-[#342114]">
            هنوز نظری برای این محصول ثبت نشده.
          </p>
          <p className="mt-1 text-sm text-[#342114]/60">
            اولین نفری باش که نظرت رو به اشتراک می‌ذاره.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {commentsWithDetails.map((item) => {
            const isHeComment = item.user_id === session?.user?.id;
            return (
              <article
                key={item.id}
                className="rounded-xl border border-[#342114]/10 p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#fcedda] text-[#54341f]">
                    <UserRound className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-bold text-[#342114]">
                        {item.userName}
                      </span>

                      <div className="flex gap-x-2 items-center">
                        {isHeComment ? (
                          <DeleteComment
                            productId={productId}
                            commentId={item.id}
                          />
                        ) : null}

                        <time className="text-xs text-[#342114]/50">
                          {new Date(item.created_at).toLocaleDateString(
                            "fa-IR",
                          )}
                        </time>
                      </div>
                    </div>

                    <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[#342114]/80">
                      {item.comment}
                    </p>

                    <details className="group mt-4">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#54341f] transition hover:bg-[#fcedda]">
                        <CornerDownLeft className="size-4" />
                        پاسخ دادن
                      </summary>

                      <div className="mt-3">
                        <ReplyForm commentId={item.id} />
                      </div>
                    </details>

                    {item.replies.length > 0 && (
                      <div className="mt-5 space-y-4 border-r-2 border-[#cca26e] pr-4">
                        {item.replies.map((reply) => (
                          <div key={reply.id} className="pt-1">
                            <div className="flex items-center gap-2">
                              <CornerDownLeft className="size-4 text-[#cca26e]" />
                              <span className="text-sm font-semibold text-[#54341f]">
                                {reply.userName}
                              </span>
                              <time className="mr-auto text-xs text-[#342114]/50">
                                {new Date(reply.created_at).toLocaleDateString(
                                  "fa-IR",
                                )}
                              </time>
                            </div>

                            <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-[#342114]/75">
                              {reply.reply}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Comments;
