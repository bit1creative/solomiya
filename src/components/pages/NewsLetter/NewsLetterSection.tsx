const html = {
  __html: `<div id="mc_embed_shell">
  
  <div id="mc_embed_signup">
      <form action="https://solomiyamag.us11.list-manage.com/subscribe/post?u=ad9b9441eaecf9358e4b5f0d0&amp;id=5615bdd19b&amp;f_id=008190e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="">
          <div id="mc_embed_signup_scroll"><h2 class="font-yuni-hair text-title md:text-title-md lg:text-title-lg xl:text-title-xl">Subscribe to our Newsletter</h2>
              <div class="mc-field-group font-nice-regular"><label class="md:text-2xl xl:text-3xl" for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                <input type="email" name="EMAIL" class="md:mt-4 md:py-4 xl:py-8 lg:text-xl xl:text-3xl required email bg-gray-200 border border-gray-700 text-gray-900 text-sm rounded-lg block w-full p-2.5" id="mce-EMAIL" required="" value="">
              </div>
          <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display: none;"></div>
              <div class="response" id="mce-success-response" style="display: none;"></div>
          </div>
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
          /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
          <input type="text" name="b_ad9b9441eaecf9358e4b5f0d0_5615bdd19b" tabindex="-1" value="">
      </div>
        <div class="optionalParent mt-4 md:mt-8">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="xl:text-3xl xl:py-4 md:text-2xl font-nice-regular py-2 button text-center w-full border-gray-700 border-2 border-solid rounded-lg" value="Subscribe">
            </div>
        </div>
      </div>
  </form>
  </div>
  </div>`
};

export const NewsLetterSection = () => (
  <div className="grid h-screen max-h-[90vh] w-full max-w-limit place-items-center">
    <div dangerouslySetInnerHTML={html} />
  </div>
);
