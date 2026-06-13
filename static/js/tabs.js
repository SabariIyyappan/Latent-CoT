document.addEventListener('DOMContentLoaded', function () {

  function initTabs(tabsEl) {
    var tabList = tabsEl.querySelectorAll('li[data-tab]');

    tabList.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-tab');

        // deactivate all tabs in this group
        tabList.forEach(function (t) { t.classList.remove('is-active'); });

        // find all tab-content siblings managed by this tabs element
        // by walking up to the parent section and looking for tab-content divs
        var section = tabsEl.parentElement;
        var contents = section.querySelectorAll('.tab-content');
        contents.forEach(function (c) { c.classList.remove('is-active'); });

        // activate the clicked tab and its content
        tab.classList.add('is-active');
        var targetEl = section.querySelector('#tab-' + target);
        if (targetEl) targetEl.classList.add('is-active');
      });
    });
  }

  document.querySelectorAll('.tabs[id]').forEach(function (tabsEl) {
    initTabs(tabsEl);
  });

});
